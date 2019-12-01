/**
 * WelcomeTopicSchema Mongoose Schema Model
 * Represents a Welcome Topic in MongoDB Collection
 *
 * Digital Media Design - Software Engineering Capstone 2019
 * Under the Sea: An interactive guide to our worlds oceans
 * @author Maggie Crocamo
 * {mjcrocamo@gmail.com, mjc494@g.harvard.edu}
 **/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WelcomeTopicSchema = new Schema({
  title: { type: String },
  image: { type: String },
  description: { type: String },
  route: { type: String }
});

mongoose.model('welcomeTopic', WelcomeTopicSchema);
