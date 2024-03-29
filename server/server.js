/**
 * Express Server Configuration
 *
 * Digital Media Design - Software Engineering Capstone 2019
 * Under the Sea: An interactive guide to our worlds oceans
 * @author Maggie Crocamo
 * {mjcrocamo@gmail.com, mjc494@g.harvard.edu}
 **/

'use strict';
const express = require('express');
const path = require('path');
const expressGraphQL = require('express-graphql');
const mongoose = require('mongoose');
const models = require('./models');
const bodyParser = require('body-parser');
const schema = require('./schema/schema');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');

/**
 * Configure environment variables
 */
dotenv.config();

/**
 * Whether this is a dev environment
 */
const isDev = process.env.NODE_ENV === 'development';

/**
 * Define constants for dev environment
 */
const expressPlayground = isDev
  ? require('graphql-playground-middleware-express').default
  : null;
const webpackMiddleware = isDev ? require('webpack-dev-middleware') : null;
const webpack = isDev ? require('webpack') : null;
const webpackConfig = isDev ? require('../webpack.dev.js') : null;

/**
 * Declare Mongo URI
 */
const MONGO_URI = process.env.MONGO_DB_URL;

if (!MONGO_URI) {
  throw new Error('You must provide a MongoLab URI');
}

/**
 * Connect to MongoDB
 */
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(
    () => {
      console.log('Mongo Db is ready to use');
    },
    error => {
      console.log(`Error connecting to Mongo: ${error}`);
    }
  );

/**
 * Connect to MongoDB Instance
 */
const db = mongoose.connection;
db.on('error', () => console.log('Error connecting to Mongo DB'));
db.once('open', () => console.log('Connected to MongoLab instance.'));

/**
 * App GraphQL and WebPack Configurations
 */
app.use(bodyParser.json());
app.use(cors());

app.use(
  `/${process.env.GRAPHQL_ENDPOINT}`,
  expressGraphQL({
    schema,
    graphiql: isDev
  })
);

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  app.use(express.static(path.join(__dirname, '../', '/dist')));

  // Express serve up index.html file if it doesn't recognize route
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
  });
}

if (isDev) {
  app.get(
    '/playground',
    expressPlayground({ endpoint: `/${process.env.GRAPHQL_ENDPOINT}` })
  );
  app.use(webpackMiddleware(webpack(webpackConfig)));
}

module.exports = app;
