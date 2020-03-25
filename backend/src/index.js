const express = require('express');
const routes = require('./routes');


const app = express();
app.use(express.json());
app.use(routes);

app.listen(3333);


/*
GET: busca
POST : Cria
PUT : Altera
Delete : deleta

*/

/*
Parametros 

Query Params: Parametros nomeados eniados na rota após ? (ex ?name=fulano&page=2)
Route Params: Parametros utilizados para identificar recursos
Request Params: Corpo da requisição utilizado pra criar e alterar recursos
*/

/*
Bds
SQL: SQLite
NoSQL: MongoDB

Driver: Select * from user
Query Builder table('users').select('*').where -> KNEX.JS

*/ 