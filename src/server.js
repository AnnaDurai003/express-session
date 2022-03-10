const express = require('express');
const cors = require('cors');
const { urlencoded } = require('express');

const app = express();
const port = process.env.PORT || 3000;
const session = require('./middleware/sessionManagement'); 
app.disable('x-powered-by');
require('dotenv').config();
app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(session);

//add the routes
app.use('/api', require('./router/index'));

// page not found error handling  middleware
app.use('*', (req, res, next) => {
  const error = {
    status: 404,
    message: API_ENDPOINT_NOT_FOUND_ERR,
  };
  next(error);
});

// global error handling middleware
app.use((err, req, res, next) => {
  
  const status = err.status || 500;
  const message = err.message || SERVER_ERR;
  const data = err.data || null;
  res.status(status).json({
    type: 'error',
    message,
    data,
  });
});

const start = async () => {
  try {
    app.listen( port, () => {
      console.log(`REST API on http://localhost:${port}/`);
    })
  } catch (error) {
    console.log(error);
  }
}
module.exports = start;