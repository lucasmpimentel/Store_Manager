const express = require('express');
require('express-async-errors');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const error = require('./middlewares/error');

const app = express();
app.use(bodyParser.json());
app.use(routes);
app.use(error);

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;
