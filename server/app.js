const express = require('express');
const path = require('path');
const compression = require('compression');
const cors = require('cors')
const bodyParser = require('body-parser');
const routes = require('./routes')
const app = express();


app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(cors());
app.use(compression());
app.use(express.static(path.join(__dirname, '../build')));
app.use(routes);


module.exports = app;