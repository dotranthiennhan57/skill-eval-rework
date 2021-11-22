const express =  require('express');
const routes = require('./app/routes');
const pool = require('./app/db');

const app = express();

app.use(express.json());
// app.use(express.urlencoded({extended: true}));
app.use('/', routes);

app.use((err, req, res, next) => {
  res.json(err);
});

module.exports = app;