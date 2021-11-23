const { Router } = require("express");
const pool = require('../db');

const router = Router();

router.get('/', (request, response, next) => {
    pool.query('SELECT * FROM Employees t1 LEFT OUTER JOIN Users t2 ON t1.user_id = t2.user_id LEFT OUTER JOIN position_list t3 ON t1.position_id = t3.position_id  ORDER BY t1.employee_id', (err, res) => {
      if (err) return next(err);
      // FULL OUTER JOIN evaluation t4 ON t1.employee_id = t4.employee_id FULL OUTER JOIN skills t5 ON t4.skill_id = t5.skill_id
      response.json(res.rows);
    });
  });
  
router.get('/:id', (request, response, next) => {
  const { id } = request.params;

  pool.query('SELECT * FROM Employees t1 LEFT OUTER JOIN Users t2 ON t1.user_id = t2.user_id LEFT OUTER JOIN position_list t3 ON t1.position_id = t3.position_id WHERE t1.employee_id = $1', [id], (err, res) => {
    if (err) return next(err);

    response.json(res.rows);
  });
});

router.post('/', (request, response, next) => {
  // const { id } = request.params;
  const { employee_id, skill_id, skill_rating } = request.body;

  pool.query(
    'INSERT INTO Evaluation(employee_id, skill_id, skill_rating) VALUES($1, $2, $3)',
    [employee_id, skill_id, skill_rating],
    (err, res) => {
      if (err) return next(err);

      response.redirect('/employees');
    }
  );
});

router.put('/:id', (request, response, next) => {
  const { id } = request.params;
  const keys = ['skill_id', 'skill_rating'];
  const fields = [];

  keys.forEach(key => {
    if (request.body[key]) fields.push(key);
  });

  fields.forEach((field, index) => {
    pool.query(
      `UPDATE Evaluation SET ${field}=($1) WHERE employee_id=($2)`,
      [request.body[field], id],
      (err, res) => {
        if (err) return next(err);

        if (index === fields.length - 1) response.redirect('/employees');
      }
    )
  });
});

  module.exports = router;