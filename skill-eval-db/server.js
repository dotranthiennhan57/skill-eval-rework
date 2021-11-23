const express =  require('express');
const cors = require("cors");
const routes = require('./app/routes/index.routes');
const pool = require('./app/db');

const app = express();

//This is connect to Angular
var corsOptions = {
  origin: "http://localhost:4581"
}

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));

// simple route
app.use('/', routes);

app.use((err, req, res, next) => {
  res.json(err);
});

//routes
// require('./app/routes/employees')(app);



module.exports = app;