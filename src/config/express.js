const userRouter = require('#Routes/user.routes.js');
const express = require('express');

const expressApp = express();

//Middlewares 
expressApp.use(express.json());

//Routes
expressApp.use('/user', userRouter)


module.exports = expressApp;