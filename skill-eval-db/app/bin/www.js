#!/usr/bin/env node

const app = require('../../server');
const port = 4580;

app.listen(port, () => console.log(`listening on port ${port}`));