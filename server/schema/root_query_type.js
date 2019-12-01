/**
 * Root Query Type
 * Contains entry fields to query Under the Sea Graph API
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
  GraphQLList,
  GraphQLID,
  GraphQLNonNull,
  GraphQLBoolean
} = graphql;
const Image = mongoose.model('image');
const SeaAnimal = mongoose.model('seaAnimal');
const Description = mongoose.model('description');
const DescriptionType = require('./description_type');
const SeaAnimalType = require('./sea_animal_type');
const DescriptionClassType = require('./description_class_type');
const DescriptionClass = mongoose.model('descriptionClass');
const ImageType = require('./image_type');
const ConservationLinkType = require('./conservation_link_type');
const ConservationLink = mongoose.model('conservationLink');
const WelcomeTopicType = require('./welcome_topic_type');
const WelcomeTopic = mongoose.model('welcomeTopic');
const SourceTypeType = require('./source_type_type');
const SourceType = require('./source_type');
const Source = mongoose.model('source');
const sourceType = mongoose.model('sourceType');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    seaAnimal: {
      type: SeaAnimalType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) }
      },
      async resolve(parentValue, { id }) {
        return await SeaAnimal.findById(id);
      }
    },
    seaAnimals: {
      type: new GraphQLList(SeaAnimalType),
      async resolve() {
        return await SeaAnimal.find({});
      }
    },
    descriptionClasses: {
      type: new GraphQLList(DescriptionClassType),
      async resolve() {
        return await DescriptionClass.find({});
      }
    },
    descriptions: {
      type: new GraphQLList(DescriptionType),
      async resolve() {
        return await Description.find({});
      }
    },
    seaAnimalImages: {
      type: new GraphQLList(ImageType),
      args: {
        seaAnimalId: { type: new GraphQLNonNull(GraphQLID) },
        isMainImage: { type: GraphQLBoolean }
      },
      async resolve(parentValue, { seaAnimalId }) {
        return await Image.find({ seaAnimal: seaAnimalId });
      }
    },
    conservationLinks: {
      type: new GraphQLList(ConservationLinkType),
      async resolve() {
        return await ConservationLink.find({});
      }
    },
    welcomeTopics: {
      type: new GraphQLList(WelcomeTopicType),
      async resolve() {
        return await WelcomeTopic.find({});
      }
    },
    sourceTypes: {
      type: new GraphQLList(SourceTypeType),
      async resolve() {
        return await sourceType.find({});
      }
    },
    sources: {
      type: new GraphQLList(SourceType),
      args: {
        typeId: { type: GraphQLID }
      },
      async resolve(parentValue, { typeId }) {
        if (typeId) {
          return await Source.find({ type: typeId });
        }
        return await Source.find({});
      }
    }
  })
});

module.exports = RootQuery;
