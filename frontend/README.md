# SVG-CITY

Aplicação para consulta de geometria de cidades mostradas por meio de SVG, a aplicação conta com a API-SVG para obter os dados das geometrias

## Instalação

Você vai precisar do Yarn para rodar a aplicação, caso não tenha você vai precisar do npm para rodar o seguinte comando no terminal (Se estiver usando linux você vai ter que utilizar o "sudo" antes do comando): npm install yarn -g

Após isso você irá precisar instalar as dependências, para isso basta rodar: yarn upgrade

## Alterar parâmetros

Você também vai precisar modificar o valor da variável "port" que está no arquivo "api.js" no caminho "src/services" e deixa-lá com o mesmo valor de porta definido no backend (Dica: Deixe o valor da porta diferente de 3000, pois é a porta usada por padrão no React para visualização na web)

## Uso

Para executar basta rodar "yarn start" na pasta "frontend" no terminal e visualizar o site no endereço "http://localhost:3000"