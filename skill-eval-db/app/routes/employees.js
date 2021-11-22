const { Router } = require("express");
const pool = require('../db');

const router = Router();

router.get('/', (request, response, next) => {
    pool.query('SELECT * FROM Employees t1 LEFT OUTER JOIN Users t2 ON t1.user_id = t2.user_id LEFT OUTER JOIN position_list t3 ON t1.position_id = t3.position_id ORDER BY employee_id ASC', (err, res) => {
      if (err) return next(err);
  
      response.json(res.rows);
    });
  });
  
  router.get('/:id', (request, response, next) => {
    const { id } = request.params;
  
    pool.query('SELECT * FROM Employees t1 LEFT OUTER JOIN Users t2 ON t1.user_id = t2.user_id LEFT OUTER JOIN position_list t3 ON t1.position_id = t3.position_id WHERE employee_id = $1', [id], (err, res) => {
      if (err) return next(err);
  
      response.json(res.rows);
    });
  });

  module.exports = router;