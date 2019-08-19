const express = require('express');
const http = require('http');
const logger = require('morgan');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const apiRouter = require('./routes/index');
const swaggerDocument = require('../swagger.json');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/api/v1', apiRouter);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);
server.listen(port, '0.0.0.0');
console.log('server listening at port:', port);

module.exports = server;
