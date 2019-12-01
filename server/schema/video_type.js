/**
 * Video Type
 *
 * Digital Media Design - Software Engineering Capstone 2019
 * Under the Sea: An interactive guide to our worlds oceans
 * @author Maggie Crocamo
 * {mjcrocamo@gmail.com, mjc494@g.harvard.edu}
 **/

const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID, GraphQLString } = graphql;

const VideoType = new GraphQLObjectType({
  name: 'VideoType',
  fields: () => ({
    id: { type: GraphQLID },
    url: { type: GraphQLString },
    alt: { type: GraphQLString }
  })
});

module.exports = VideoType;
