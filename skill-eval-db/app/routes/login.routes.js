const { Router } = require("express");
const pool = require('../db');

const router = Router();

//Code here
router.get('/', (request,response, next) => {
    const { email } = request.body;

    const getUserInfoText = `
    select * from users u
    where email = $1
    `

    pool.query(getUserInfoText, [email], (err, res) => {
        if (err) return next(err);
    
        response.json(res.rows);
      })
});


module.exports = router;