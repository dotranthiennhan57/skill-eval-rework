const { Pool } = require('pg');
const { user, host, database, password, port } = require('../secrets/db_configuration');


const pool = new Pool({ user, host, database, password, port })

// pool.query('SELECT * FROM Employees', (err,res) =>{
//     if(err) return console.log(err);

//     console.log(res); // This is to display details in terminal
// });

module.exports = pool;