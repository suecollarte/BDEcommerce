const {options } = require('./BD.js');
const knex = require('knex')(options);

const carro=[
    {id:1,fecha:'2022/09/13',montototal:40000}
    ,{id:2,fecha:'2022/09/13',montototal:40000}
    ,{id:3,fecha:'2022/09/13',montototal:40000}
    ,{id:4,fecha:'2022/09/13',montototal:40000}
];

knex('carro').insert(carro)
    .then(() => console.log("dato insertado"))
    .catch((err) => {console.log(err);throw err})
    .finally(() =>{
        knex.destroy();
    })