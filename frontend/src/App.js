import './App.css';
import { Component } from 'react';
import api from './services/api.js';

export default class App extends Component {

  state = {
    cidade: '',
    path: '',
    viewBox: '0 0 0 0',
    alertDisplay: 'none',
  }

  getSVG = async () => {

    const { cidade } = this.state;

    try {
      const response = await api.get(`getSvg/${cidade}`);
      this.setState({ path: response.data[0].st_assvg });
      this.getViewBox();
    } catch (err) {
      console.log(err);
      this.setState({ alertDisplay: 'flex' });
    }
  }

  getViewBox = async () => {

    const { cidade } = this.state;

    try {
      const response = await api.get(`getViewBox/${cidade}`);
      this.setState({ viewBox: response.data[0].getviewbox });
    } catch (err) {
      window.alert('Ocorreu um erro ao tentar encontrar a ViewBox');
    }
  }

  render() {

    const { viewBox, path, alertDisplay } = this.state;

    return (
      <div className="App">

        <div className="alert-box" style={{ display: alertDisplay }}>
          <h2>Aviso</h2>
          <p>Cidade não encontrada</p>
          <button onClick={() => {
            this.setState({ alertDisplay: 'none' });
          }}>Ok</button>
        </div>

        <header>
          <h1>SVG CITY</h1>
        </header>

        <section id="svg-section">
          <svg width="300" height="300" viewBox={viewBox}>
            <path d={path} fill="lightseagreen" stroke="black" strokeWidth="0.0025" />
          </svg>
        </section>

        <div id="search-city">
          <input id="ipt" type="text" placeholder="Digite o nome de uma cidade" onInput={(event) => {
            this.setState({ cidade: event.target.value });
          }} onKeyUp={(event) => {
            if (event.key === 'Enter') {
              this.getSVG();
            }
          }}></input>
          <button id="btn" onClick={() => {
            this.getSVG();
          }}>OK</button>
        </div>
      </div>
    )
  }
}