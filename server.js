const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Route } = require('./routers');

const server = express();

server.use(cors());
server.use(bodyParser.json());

Route(server);

module.exports = server;