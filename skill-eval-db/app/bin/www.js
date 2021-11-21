#!/usr/bin/env node

const app = require('../app');
const port = 4580;

app.listen(port, () => console.log(`listening on port ${port}`));