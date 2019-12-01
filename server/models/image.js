/**
 * ImageSchema Mongoose Schema Model
 * Represents a Image in MongoDB Collection
 *
 * Digital Media Design - Software Engineering Capstone 2019
 * Under the Sea: An interactive guide to our worlds oceans
 * @author Maggie Crocamo
 * {mjcrocamo@gmail.com, mjc494@g.harvard.edu}
 **/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
  url: { type: String },
  alt: { type: String },
  main: { type: Boolean },
  seaAnimal: {
    type: Schema.Types.ObjectId,
    ref: 'seaAnimal'
  }
});

mongoose.model('image', ImageSchema);
