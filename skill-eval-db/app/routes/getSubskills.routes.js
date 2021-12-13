const { Router } = require("express");
const pool = require('../db');

const router = Router();

// router.get('/', (request, response, next) => {
//   // const { employee_id } = request.params;

//   const getAllEmployeesText = `
//   select * from skills s 
//   left outer join evaluation e on s.skill_id = e.skill_id 
//   where subskillof is not null and employee_id = 5;
//     `
//   pool
//     .query(getAllEmployeesText)
//     .then(res => response.json(res.rows))
//     .catch(err => next(err));
// });

module.exports = router;
