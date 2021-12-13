const { Router } = require("express");
const employees = require('./employees.routes');
const getSubskills = require('./getSubskills.routes')

const router = Router();

router.use('/employees', employees);

router.use('/getSubskills', getSubskills)

module.exports =router;