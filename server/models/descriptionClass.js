/**
 * DescriptionClass Mongoose Schema Model
 * Represents a Description Class in MongoDB Collection
 *
 * Digital Media Design - Software Engineering Capstone 2019
 * Under the Sea: An interactive guide to our worlds oceans
 * @author Maggie Crocamo
 * {mjcrocamo@gmail.com, mjc494@g.harvard.edu}
 **/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DescriptionClassSchema = new Schema({
  name: { type: String }
});

mongoose.model('descriptionClass', DescriptionClassSchema);
