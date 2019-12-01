/**
 * Source Mongoose Schema Model
 * Represents a Source in MongoDB Collection
 *
 * Digital Media Design - Software Engineering Capstone 2019
 * Under the Sea: An interactive guide to our worlds oceans
 * @author Maggie Crocamo
 * {mjcrocamo@gmail.com, mjc494@g.harvard.edu}
 **/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SourceSchema = new Schema({
  name: { type: String },
  url: { type: String },
  source: { type: String },
  type: { type: Schema.Types.ObjectId, ref: 'sourceType' }
});

/**
 * Finds links related to a source
 */
SourceSchema.statics.findLinks = function(id) {
  return this.findById(id)
    .populate('links')
    .then(source => source.links);
};

mongoose.model('source', SourceSchema);
