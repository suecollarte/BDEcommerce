const {options } = require('./BDMysql.js');
const knex = require('knex')(options);


knex.schema.createTable('carro',table =>{
table.increments('id')
table.date('fecha')
table.integer('montototal')

})
    .then(() => console.log("tabla creada"))
    .catch((err) => {console.log(err);})
    .finally(() =>{
        knex.destroy();
    });