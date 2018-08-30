const express = require('express');
const app = express();
const morgan = require('morgan');

const chestRoutes = require('./api/routes/chest');
app.use(morgan('dev'));
app.use('/chest',chestRoutes );

app.use((req,res,next)=>{
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
});

app.use((error, req,res,next)=>{
    res.status(error.status||500).json({
        error:{
            message: error.message
        }
    });
});

module.exports = app; 