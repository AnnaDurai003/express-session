const pool  = require('../config/databaseConfig');

module.exports.service= (sql) => {
  return new Promise((resolve, reject) => {
    pool.query(sql, (err, result, fields) => {
      if (!err) {
        return resolve(result)
      }
      return reject(err)
    })
  })
}