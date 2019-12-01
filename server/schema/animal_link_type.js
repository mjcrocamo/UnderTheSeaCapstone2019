/**
 * Animal Link Type
 *
 * Digital Media Design - Software Engineering Capstone 2019
 * Under the Sea: An interactive guide to our worlds oceans
 * @author Maggie Crocamo
 * {mjcrocamo@gmail.com, mjc494@g.harvard.edu}
 **/

const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID, GraphQLString } = graphql;

const AnimalLinkType = new GraphQLObjectType({
  name: 'AnimalLinkType',
  fields: () => ({
    id: { type: GraphQLID },
    url: { type: GraphQLString },
    name: {
      type: GraphQLString
    }
  })
});

module.exports = AnimalLinkType;
