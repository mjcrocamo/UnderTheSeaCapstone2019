/**
 * Express Server Configuration
 *
 * Digital Media Design - Software Engineering Capstone 2019
 * Under the Sea: An interactive guide to our worlds oceans
 * @author Maggie Crocamo
 * {mjcrocamo@gmail.com, mjc494@g.harvard.edu}
 **/

const express = require('express');
const expressGraphQL = require('express-graphql');
const mongoose = require('mongoose');
const models = require('./models');
const bodyParser = require('body-parser');
const schema = require('./schema/schema');
const expressPlayground = require('graphql-playground-middleware-express')
  .default;
const app = express();
const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack.dev.js');
const dotenv = require('dotenv');

/**
 * Configure environment variables
 */
dotenv.config();

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

app.use(
  '/graphql',
  expressGraphQL({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
  })
);

if (process.env.NODE_ENV === 'development') {
  app.get('/playground', expressPlayground({ endpoint: '/graphql' }));
  app.use(webpackMiddleware(webpack(webpackConfig)));
}

module.exports = app;
