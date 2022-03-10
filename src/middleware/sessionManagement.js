const session = require('express-session')
const pool = require('../config/databaseConfig')
const mysqlStore = require('express-mysql-session')(session)

let sessionStore = new mysqlStore(
  {
    // expiration: 1000*60*60*24,
    createDatabaseTable: true,
    schema: {
      tableName: 'session_table',
      columnNames: {
        session_id: 'session_id',
        expires: 'expires',
        data: 'data',
      },
    },
  },
  pool
)

module.exports = session({
  key: 'ReportSessionId',
  secret: 'my secrete',
  store: sessionStore,
  clearExpired: true,
  expiration: 12000,
  resave: false,
  saveUninitialized: false,
  cookie: {
    expiration: 12000,
  },
})
