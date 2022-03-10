const { createPool } = require('mysql');

const db_connect = createPool({
  host: 'localhost',
  user: process.env.USER,
  password: 'Durai@12345'|| process.env.PASSWORD ,
  database: 'repot',
  connectionLimit: 10,
});

module.exports = db_connect;
