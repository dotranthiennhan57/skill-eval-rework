const { Router } = require("express");
const employees = require('./employees.routes');
const getSubskills = require('./getSubskills.routes');
const login = require('./login.routes');

const router = Router();

router.use('/employees', employees);

router.use('/getSubskills', getSubskills)

router.use('/login', login )

module.exports =router;