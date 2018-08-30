const express = require('express');
const app = express();
const morgan = require('morgan');

const chestRoutes = require('./api/routes/chest');
app.use(morgan('dev'));
app.use('/chest',chestRoutes );

module.exports = app; 