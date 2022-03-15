const express =  require('express');
const cors = require("cors");
const routes = require('./app/routes/index.routes');
const pool = require('./app/db');
const Sequelize = require('sequelize');

const app = express();

//This is connect to Angular
var corsOptions = {
  origin: "http://3.19.227.187"
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

//Connect Sequelize to PostgreSQL Database
var sequelize = new Sequelize('SkillEvaluation', 'node_user', 'node_password', {
  host: "0.0.0.0", //your server
  port: 4580,//server port
  dialect: 'postgres'
});

app.listen(4580, function () {
  console.log('CORS-enabled web server listening on port 4580')
})


module.exports = app;