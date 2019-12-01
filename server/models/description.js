/**
 * Description Mongoose Schema Model
 * Represents a Description in MongoDB Collection
 *
 * Digital Media Design - Software Engineering Capstone 2019
 * Under the Sea: An interactive guide to our worlds oceans
 * @author Maggie Crocamo
 * {mjcrocamo@gmail.com, mjc494@g.harvard.edu}
 **/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DescriptionSchema = new Schema({
  seaAnimal: {
    type: Schema.Types.ObjectId,
    ref: 'seaAnimal'
  },
  content: { type: String },
  class: {
    type: Schema.Types.ObjectId,
    ref: 'descriptionClass'
  },
  conservationSite: {
    type: Schema.Types.ObjectId,
    ref: 'conservationLink'
  }
});

mongoose.model('description', DescriptionSchema);
