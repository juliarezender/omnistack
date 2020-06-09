const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes'); //  tem que colocar o caminho para ele nao tentar achar o modulo routes

const app = express();

mongoose.connect('mongodb+srv://julia:julia@omnistack-maun8.mongodb.net/omnistack?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);

//  define a porta que a aplicação rodará
app.listen(3333);