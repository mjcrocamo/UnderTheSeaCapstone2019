/**
 * Server.js
 * Server Set Up for Under the Sea App
 *
 * Digital Media Design - Software Engineering Capstone 2019
 * Under the Sea: An interactive guide to our worlds oceans
 * @author Maggie Crocamo
 * {mjcrocamo@gmail.com, mjc494@g.harvard.edu}
 **/

const app = require('./server/server');
const dotenv = require('dotenv');

/**
 * Configure environment variables
 */
dotenv.config();

/**
 * Listen
 */
app.listen(process.env.PORT, () => {
  console.log('Listening');
});
