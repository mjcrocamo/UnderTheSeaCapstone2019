/**
 * Sea Animal Type
 *
 * Digital Media Design - Software Engineering Capstone 2019
 * Under the Sea: An interactive guide to our worlds oceans
 * @author Maggie Crocamo
 * {mjcrocamo@gmail.com, mjc494@g.harvard.edu}
 **/

const mongoose = require('mongoose');
const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
  GraphQLFloat
} = graphql;
const DescriptionType = require('./description_type');
const Description = mongoose.model('description');
const SeaAnimal = mongoose.model('seaAnimal');
const Image = mongoose.model('image');
const ImageType = require('./image_type');
const AnimalLinkType = require('./animal_link_type');
const VideoType = require('./video_type');
const Video = mongoose.model('video');

const SeaAnimalType = new GraphQLObjectType({
  name: 'SeaAnimalType',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    binomialName: { type: GraphQLString },
    minSizeInches: { type: GraphQLFloat },
    maxSizeInches: { type: GraphQLFloat },
    minSizeFeet: { type: GraphQLFloat },
    maxSizeFeet: { type: GraphQLFloat },
    minWeightlbs: { type: GraphQLFloat },
    maxWeightlbs: { type: GraphQLFloat },
    diet: { type: GraphQLString },
    animalClass: { type: GraphQLString },
    averageLifeSpan: { type: GraphQLFloat },
    mainImage: {
      type: ImageType,
      async resolve(parentValue) {
        return await Image.find({
          seaAnimal: parentValue.id,
          main: true
        }).then(response => {
          return response[0];
        });
      }
    },
    links: {
      type: new GraphQLList(AnimalLinkType),
      async resolve(parentValue) {
        return await SeaAnimal.findLinks(parentValue.id);
      }
    },
    images: {
      type: new GraphQLList(ImageType),
      async resolve(parentValue) {
        return await Image.find({ seaAnimal: parentValue.id, main: false });
      }
    },
    descriptions: {
      type: new GraphQLList(DescriptionType),
      async resolve(parentValue) {
        return await Description.find({ seaAnimal: parentValue.id });
      }
    },
    videos: {
      type: new GraphQLList(VideoType),
      async resolve(parentValue) {
        return await Video.find({ seaAnimal: parentValue.id });
      }
    }
  })
});

module.exports = SeaAnimalType;
