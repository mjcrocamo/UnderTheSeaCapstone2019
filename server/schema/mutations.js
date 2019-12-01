/**
 * Root Mutation Type
 * Contains Mutations Used to Add Information
 * to Under the Sea Mongo DB Collections
 * They technically don't have any uses on the actual web application
 * which is why there's security around accessing mutations
 *
 * Digital Media Design - Software Engineering Capstone 2019
 * Under the Sea: An interactive guide to our worlds oceans
 * @author Maggie Crocamo
 * {mjcrocamo@gmail.com, mjc494@g.harvard.edu}
 **/

const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLFloat
} = graphql;
const mongoose = require('mongoose');
const SeaAnimal = mongoose.model('seaAnimal');
const DescriptionClass = mongoose.model('descriptionClass');
const SeaAnimalType = require('./sea_animal_type');
const DescriptionClassType = require('./description_class_type');
const ConservationLinkType = require('./conservation_link_type');
const ConservationLink = mongoose.model('conservationLink');
const WelcomeTopicType = require('./welcome_topic_type');
const WelcomeTopic = mongoose.model('welcomeTopic');
const Source = mongoose.model('source');
const SourceType = require('./source_type');
const SourceTypeType = require('./source_type_type');
const sourceType = mongoose.model('sourceType');
const dotenv = require('dotenv');

/**
 * Configure environment variables
 */
dotenv.config();

const shouldAllowMutation = process.env.NODE_ENV === 'development';
const API_KEY = process.env.API_KEY;

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addDescription: {
      type: SeaAnimalType,
      args: {
        content: { type: GraphQLString },
        seaAnimalId: { type: new GraphQLNonNull(GraphQLID) },
        classId: { type: new GraphQLNonNull(GraphQLID) },
        apiKey: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parentValue, { content, seaAnimalId, classId, apiKey }) {
        return shouldAllowMutation && apiKey === API_KEY
          ? SeaAnimal.addDescription(seaAnimalId, content, classId)
          : null;
      }
    },
    addDescriptionForLink: {
      type: ConservationLinkType,
      args: {
        content: { type: GraphQLString },
        conservationLinkId: { type: new GraphQLNonNull(GraphQLID) },
        classId: { type: new GraphQLNonNull(GraphQLID) },
        apiKey: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parentValue, { content, conservationLinkId, classId, apiKey }) {
        return shouldAllowMutation && apiKey === API_KEY
          ? ConservationLink.addDescription(
              conservationLinkId,
              content,
              classId
            )
          : null;
      }
    },
    addConservationLink: {
      type: ConservationLinkType,
      args: {
        url: { type: GraphQLString },
        name: { type: GraphQLString },
        apiKey: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parentValue, { url, name, apiKey }) {
        return shouldAllowMutation && apiKey === API_KEY
          ? new ConservationLink({ name, url }).save()
          : null;
      }
    },
    addSource: {
      type: SourceType,
      args: {
        url: { type: GraphQLString },
        name: { type: GraphQLString },
        source: { type: GraphQLString },
        type: { type: GraphQLID },
        apiKey: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parentValue, { url, name, source, type, apiKey }) {
        return shouldAllowMutation && apiKey === API_KEY
          ? new Source({ url, name, source, type }).save()
          : null;
      }
    },
    addSourceType: {
      type: SourceTypeType,
      args: {
        name: { type: GraphQLString },
        apiKey: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parentValue, { name, apiKey }) {
        return shouldAllowMutation && apiKey === API_KEY
          ? new sourceType({ name }).save()
          : null;
      }
    },
    addSeaAnimal: {
      type: SeaAnimalType,
      args: {
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
        apiKey: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(
        parentValue,
        {
          name,
          binomialName,
          minSizeInches,
          maxSizeInches,
          minSizeFeet,
          maxSizeFeet,
          minWeightlbs,
          maxWeightlbs,
          diet,
          animalClass,
          averageLifeSpan,
          apiKey
        }
      ) {
        return shouldAllowMutation && apiKey === API_KEY
          ? new SeaAnimal({
              name,
              binomialName,
              minSizeInches,
              maxSizeInches,
              minSizeFeet,
              maxSizeFeet,
              minWeightlbs,
              maxWeightlbs,
              diet,
              animalClass,
              averageLifeSpan
            }).save()
          : null;
      }
    },
    addDescriptionClass: {
      type: DescriptionClassType,
      args: {
        name: { type: GraphQLString },
        apiKey: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parentValue, { name, apiKey }) {
        return shouldAllowMutation && apiKey === API_KEY
          ? new DescriptionClass({ name }).save()
          : null;
      }
    },
    addImage: {
      type: SeaAnimalType,
      args: {
        url: { type: GraphQLString },
        alt: { type: GraphQLString },
        seaAnimalId: { type: GraphQLID },
        main: { type: GraphQLBoolean },
        apiKey: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parentValue, { seaAnimalId, url, alt, main, apiKey }) {
        return shouldAllowMutation && apiKey === API_KEY
          ? SeaAnimal.addImage(seaAnimalId, url, alt, main)
          : null;
      }
    },
    addVideo: {
      type: SeaAnimalType,
      args: {
        url: { type: GraphQLString },
        alt: { type: GraphQLString },
        seaAnimalId: { type: GraphQLID },
        apiKey: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parentValue, { seaAnimalId, url, alt, apiKey }) {
        return shouldAllowMutation && apiKey === API_KEY
          ? SeaAnimal.addVideo(seaAnimalId, url, alt)
          : null;
      }
    },
    addLink: {
      type: SeaAnimalType,
      args: {
        url: { type: GraphQLString },
        name: { type: GraphQLString },
        seaAnimalId: { type: GraphQLID },
        apiKey: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parentValue, { seaAnimalId, url, name, apiKey }) {
        return shouldAllowMutation && apiKey === API_KEY
          ? SeaAnimal.addLink(seaAnimalId, url, name)
          : null;
      }
    },
    addWelcomeTopic: {
      type: WelcomeTopicType,
      args: {
        route: { type: GraphQLString },
        title: { type: GraphQLString },
        image: { type: GraphQLString },
        description: { type: GraphQLString },
        apiKey: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parentValue, { route, title, image, description, apiKey }) {
        return shouldAllowMutation && apiKey === API_KEY
          ? new WelcomeTopic({ route, title, image, description }).save()
          : null;
      }
    }
  }
});

module.exports = mutation;
