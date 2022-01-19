const { Router, request, response } = require("express");
const pool = require('../db');

const router = Router();

//Retrieve all employees
router.get('/', (request, response, next) => {
  const getAllEmployeesText = `
      SELECT * FROM Employees t1 
      LEFT OUTER JOIN Users t2 
      ON t1.user_id = t2.user_id 
      LEFT OUTER JOIN position_list t3 
      ON t1.position_id = t3.position_id  
      ORDER BY t1.employee_id
      `
  pool.query(getAllEmployeesText, (err, res) => {
    if (err) return next(err);

    response.json(res.rows);
  });
});

// router.get('/', (request, response, next) => {
//   const getAllEmployeesText = `
//       SELECT * FROM Employees t1 
//       LEFT OUTER JOIN Users t2 
//       ON t1.user_id = t2.user_id 
//       LEFT OUTER JOIN position_list t3 
//       ON t1.position_id = t3.position_id  
//       ORDER BY t1.employee_id
//       `
//   pool
//     .query(getAllEmployeesText)
//     .then(res => response.json(res.rows))
//     .catch(err => next(err));
// });

//Get all position includes position_id and position_name (backup/justInCase)
router.get('/position', (request, response, next) => {
  const getAllPositionText = `
    SELECT * FROM position_list pl ;
  `
  pool.query(getAllPositionText, (err, res) => {
    if (err) return next(err);

    response.json(res.rows);
  });
});

//Get all major skills
router.get('/majorskills', (request, response, next) => {
  const getAllPositionText = `
    SELECT * 
    FROM skills s
    WHERE subskillof is null;
  `
  pool.query(getAllPositionText, (err, res) => {
    if (err) return next(err);

    response.json(res.rows);
  });
});

//Get all subskills
router.get('/subskills', (request, response, next) => {
  const getAllPositionText = `
    SELECT * 
    FROM skills s
    WHERE subskillof is not null;
  `
  pool.query(getAllPositionText, (err, res) => {
    if (err) return next(err);

    response.json(res.rows);
  });
});

//Get single employee by employee_id(show as param)
router.get('/:employee_id', (request, response, next) => {
  const { employee_id } = request.params;

  const getEmployeeByIdText =`
    SELECT t1.employee_id, first_name, last_name, position_name, t4.skill_id, skill_name, skill_rating, subskillof 
    FROM Employees t1 
    LEFT OUTER JOIN Users t2 
    ON t1.user_id = t2.user_id 
    LEFT OUTER JOIN position_list t3 
    ON t1.position_id = t3.position_id 
    LEFT OUTER JOIN evaluation t4 
    ON t1.employee_id = t4.employee_id 
    LEFT OUTER JOIN skills t5 
    ON t4.skill_id = t5.skill_id 
    WHERE t1.employee_id = $1 and t5.subskillof is null 
    ORDER BY skill_name
    `

  pool.query(getEmployeeByIdText, [employee_id], (err, res) => {
    if (err) return next(err);

    response.json(res.rows);
  });
});

//Get subskills list for each employee (needs filter by skill_id =  subskillof)
router.get('/:employee_id/data', (request, response, next) => {
  const { employee_id } = request.params;

  const getEmployeeByIdText =`
  select * from skills s 
  left outer join evaluation e on s.skill_id = e.skill_id 
  where subskillof is not null and employee_id = $1;
  `

  pool.query(getEmployeeByIdText, [employee_id], (err, res) => {
    if (err) return next(err);

    response.json(res.rows);
  });
});

//Get coworker list for each employee (needs filter by skill_id =  subskillof)
router.get('/:employee_id/coworker', (request, response, next) => {
  const { employee_id } = request.params;

  const getEmployeeByIdText =`
  select e.employee_id, u.first_name, u.last_name 
  from employee_relation er 
  left join employees e 
  ON er.coworker = e.employee_id 
  left join users u 
  on e.user_id = u.user_id 
  where er.employee = $1;
  `

  pool.query(getEmployeeByIdText, [employee_id], (err, res) => {
    if (err) return next(err);

    response.json(res.rows);
  });
});

//POST, Add main skills now
router.post('/evaluation', (request, response, next) => {
  const {employee_id, skill_id} = request.body;

  pool.query(
    `insert into evaluation (employee_id, skill_id)
    select $1, $2 
    where
      not exists(
        select employee_id, skill_id 
        from evaluation 
        where employee_id = $1 and skill_id = $2);
    `,
    [employee_id, skill_id],
    (err, res) => {
      if (err) return next(err);

      response.json(res.rows);
    }
  );
});

//POST, auto add subskills

//PUT, update any skill, working
router.put('/updateSkills', (request, response, next) =>{
  // const {employee_id} = request.params;
  const {skill_id, skill_rating, employee_id} = request.body;

  pool.query(
    `
    UPDATE evaluation 
    SET
      skill_rating = $1
    WHERE
      skill_id = $2
      AND
      employee_id = $3
    `,
    [skill_rating,skill_id,employee_id],
    (err, res) => {
      if (err) return next(err);

      response.json(res.rows);
    })
});

//DELETE, delete a main skill, works!!
router.delete('/delete', (request, response, next) => {
  const {employee_id, skill_id} = request.body;

  pool.query(
    `
    DELETE FROM evaluation 
    WHERE employee_id = $1 and skill_id = $2;`,
    [employee_id, skill_id], 
    (err, res) => {
      if (err) return next(err);

      response.json(res.rows);
    })
});


  module.exports = router;