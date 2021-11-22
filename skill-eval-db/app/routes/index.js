const { Router } = require("express");
const employees = require('./employees');

const router = Router();

router.use('/employees', employees);

module.exports =router;