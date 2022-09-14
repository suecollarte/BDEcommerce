const {options } = require('./BDMysql.js');
const knex = require('knex')(options);


knex.from('carro').select("*")
    .then((rows) => {
       for (row of rows){
        console.log(`${row['id']} ${row['fecha']}  ${row['montototal']}`)
       }
    })
    .catch((err) => {console.log(err);throw err})
    .finally(() =>{
        knex.destroy();
    })