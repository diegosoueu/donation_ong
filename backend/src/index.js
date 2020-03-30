const express = require('express');
const cors = require('cors');
const routes = require('./routes');//usa o ./ pq é uma arquivo e não um pacote

const app = express();
//app.use(cors({origin:'http://meusite.com'}));
app.use(cors());
app.use(express.json());
app.use(routes);//tem q ser abaixo do codigo express.json()

app.listen(3333);
/*Rotas e Recursosdd
*
*GET: quando queremos buscar ou listar uma informação do back-end
*POST: quando queremos Criar uma informação no back-end
*PUT: quando queremos alterar uma informação no back-end
*DELETE: quando queremos deletar uma coisa no back-end
*/
/*Métodos HTTP*/

/**
 * Tipos de Paramentros:
 * 
 * Query Parms: Parametros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route Parms: Parametros utilizados para identificar recursos.":id"
 * Request Body: Corpo da requisição usado para criar ou alterar recursos
 */

 /**
  * SQL: MySql, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, etc
  */

  /**
   * Driver: SELECT * FROM users
   * Query Builder: table('users').select(*).where()
   */
