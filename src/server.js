'use strict';

// 3rd Party Resources
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const logger = require('./auth/middleware/logger');
const v1Routes = require('./routes/v1.js');
// const v2Routes = require('./routes/v2.js');
// Esoteric Resources
const errorHandler = require('./error-handlers/500.js');
const notFound = require('./error-handlers/404.js');
const authRoutes = require('./routes/routes');
const app = express();
app.use(logger);
app.use('/api/v1', v1Routes);
// app.use('/api/v2', v2Routes);

// Prepare the express app


// App Level MW
app.use(cors());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(authRoutes);

// Catchalls
app.use(notFound);
app.use(errorHandler);
 

module.exports = {
  db:app,
  server: app,
  start: port => {
    if (!port) { throw new Error('Missing Port'); }
    app.listen(port, () => console.log(`Listening on ${port}`));
  },
};

