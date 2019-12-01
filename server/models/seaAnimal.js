/**
 * SeaAnimal Mongoose Schema Model
 * Represents a Sea Animal in MongoDB Collection
 *
 * Digital Media Design - Software Engineering Capstone 2019
 * Under the Sea: An interactive guide to our worlds oceans
 * @author Maggie Crocamo
 * {mjcrocamo@gmail.com, mjc494@g.harvard.edu}
 **/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SeaAnimalSchema = new Schema({
  name: { type: String },
  binomialName: { type: String },
  minSizeInches: { type: Number },
  maxSizeInches: { type: Number },
  minSizeFeet: { type: Number },
  maxSizeFeet: { type: Number },
  minWeightlbs: { type: Number },
  maxWeightlbs: { type: Number },
  diet: { type: String },
  animalClass: { type: String },
  averageLifeSpan: { type: Number },
  links: [{ type: Schema.Types.ObjectId, ref: 'animalLink' }],
  images: [{ type: Schema.Types.ObjectId, ref: 'image' }],
  descriptions: [
    {
      type: Schema.Types.ObjectId,
      ref: 'description'
    }
  ],
  videos: [{ type: Schema.Types.ObjectId, ref: 'video' }]
});

/**
 * Links a description to a sea animal
 */
SeaAnimalSchema.statics.addDescription = function(id, content, classId) {
  const Description = mongoose.model('description');

  return this.findById(id).then(seaAnimal => {
    const description = new Description({
      content,
      seaAnimal,
      class: classId
    });
    seaAnimal.descriptions.push(description);
    return Promise.all([description.save(), seaAnimal.save()]).then(
      ([description, seaAnimal]) => seaAnimal
    );
  });
};

/**
 * Links an image to a sea animal
 */
SeaAnimalSchema.statics.addImage = function(id, url, alt, main) {
  const Image = mongoose.model('image');

  return this.findById(id).then(seaAnimal => {
    const image = new Image({
      url,
      alt,
      main,
      seaAnimal
    });
    seaAnimal.images.push(image);
    return Promise.all([image.save(), seaAnimal.save()]).then(
      ([image, seaAnimal]) => seaAnimal
    );
  });
};

/**
 * Links a video to a sea animal
 */
SeaAnimalSchema.statics.addVideo = function(id, url, alt) {
  const Video = mongoose.model('video');

  return this.findById(id).then(seaAnimal => {
    const video = new Video({
      url,
      alt,
      seaAnimal
    });
    seaAnimal.videos.push(video);
    return Promise.all([video.save(), seaAnimal.save()]).then(
      ([video, seaAnimal]) => seaAnimal
    );
  });
};

/**
 * Links a link to a sea animal
 */
SeaAnimalSchema.statics.addLink = function(id, url, name) {
  const AnimalLink = mongoose.model('animalLink');

  return this.findById(id).then(seaAnimal => {
    const link = new AnimalLink({
      url,
      name
    });
    seaAnimal.links.push(link);
    return Promise.all([link.save(), seaAnimal.save()]).then(
      ([image, seaAnimal]) => seaAnimal
    );
  });
};

/**
 * Finds all descriptions related to a sea animal
 */
SeaAnimalSchema.statics.findDescriptions = function(id) {
  return this.findById(id)
    .populate('descriptions')
    .then(seaAnimal => seaAnimal.descriptions);
};

/**
 * Finds all images related to a sea animal
 */
SeaAnimalSchema.statics.findImages = function(id) {
  return this.findById(id)
    .populate('images')
    .then(seaAnimal => seaAnimal.images);
};

/**
 * Finds a link related to a sea animal
 */
SeaAnimalSchema.statics.findLinks = function(id) {
  return this.findById(id)
    .populate('links')
    .then(seaAnimal => seaAnimal.links);
};

mongoose.model('seaAnimal', SeaAnimalSchema);
