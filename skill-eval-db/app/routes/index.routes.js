const { Router } = require("express");
const employees = require('./employees.routes');

const router = Router();

router.use('/employees', employees);

module.exports =router;