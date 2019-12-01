/**
 * Conservation Link Type
 *
 * Digital Media Design - Software Engineering Capstone 2019
 * Under the Sea: An interactive guide to our worlds oceans
 * @author Maggie Crocamo
 * {mjcrocamo@gmail.com, mjc494@g.harvard.edu}
 **/

const mongoose = require('mongoose');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList } = graphql;
const Description = mongoose.model('description');
const DescriptionType = require('./description_type');

const ConservationLinkType = new GraphQLObjectType({
  name: 'ConservationLinkType',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    url: { type: GraphQLString },
    descriptions: {
      type: new GraphQLList(DescriptionType),
      async resolve(parentValue) {
        return await Description.find({ conservationSite: parentValue.id });
      }
    }
  })
});

module.exports = ConservationLinkType;
