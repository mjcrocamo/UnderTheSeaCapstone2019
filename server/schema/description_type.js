/**
 * Description Type
 *
 * Digital Media Design - Software Engineering Capstone 2019
 * Under the Sea: An interactive guide to our worlds oceans
 * @author Maggie Crocamo
 * {mjcrocamo@gmail.com, mjc494@g.harvard.edu}
 **/

const mongoose = require('mongoose');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID, GraphQLString } = graphql;
const Description = mongoose.model('description');
const DescriptionClassType = require('./description_class_type');

const DescriptionType = new GraphQLObjectType({
  name: 'DescriptionType',
  fields: () => ({
    id: { type: GraphQLID },
    content: { type: GraphQLString },
    seaAnimal: {
      type: require('./sea_animal_type'),
      async resolve(parentValue) {
        return await Description.findById(parentValue)
          .populate('seaAnimal')
          .then(description => {
            return description.seaAnimal;
          });
      }
    },
    class: {
      type: DescriptionClassType,
      async resolve(parentValue) {
        return await Description.findById(parentValue)
          .populate('class')
          .then(description => {
            return description.class;
          });
      }
    }
  })
});

module.exports = DescriptionType;
