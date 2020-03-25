const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());    //to falando para o express ir no corpo da minha requisição e converter o json em um objeto javascript
app.use(routes);

/**
 * Métodos HTTP:
 * 
 * get: Buscar/Listar uma informação do back-end
 * post: Criar uma informação no back-end
 * put: Alterar uma informação no back-end
 * delete: deletar uma informação no back-end
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query Params: Parâmetros nomeados enviados na rota após "?" (filtros, paginação)
  * Route Params: Parâmetros utilizados para identificar recursos
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  */

  /**
   * SQL: MySQL, SQLite; PostgreSQL; Oracle; Microsoft SQL Server
   * NoSQL: MongoDB, CouchDB; etc
   */




app.listen(3333);