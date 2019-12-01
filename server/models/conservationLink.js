/**
 * ConservationLink Mongoose Schema Model
 * Represents a Conservation Link in MongoDB Collection
 *
 * Digital Media Design - Software Engineering Capstone 2019
 * Under the Sea: An interactive guide to our worlds oceans
 * @author Maggie Crocamo
 * {mjcrocamo@gmail.com, mjc494@g.harvard.edu}
 **/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ConservationLinkSchema = new Schema({
  url: { type: String },
  name: { type: String },
  descriptions: [
    {
      type: Schema.Types.ObjectId,
      ref: 'description'
    }
  ],
  images: [{ type: Schema.Types.ObjectId, ref: 'image' }]
});

/**
 * Function which adds a description to a Conservation Link
 */
ConservationLinkSchema.statics.addDescription = function(id, content, classId) {
  const Description = mongoose.model('description');

  return this.findById(id).then(conservationLink => {
    const description = new Description({
      content,
      conservationSite: conservationLink,
      class: classId
    });
    conservationLink.descriptions.push(description);
    return Promise.all([description.save(), conservationLink.save()]).then(
      ([description, conservationLink]) => conservationLink
    );
  });
};

mongoose.model('conservationLink', ConservationLinkSchema);
