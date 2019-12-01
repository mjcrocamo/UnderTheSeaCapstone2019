/**
 * Description Class Type
 *
 * Digital Media Design - Software Engineering Capstone 2019
 * Under the Sea: An interactive guide to our worlds oceans
 * @author Maggie Crocamo
 * {mjcrocamo@gmail.com, mjc494@g.harvard.edu}
 **/

const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID, GraphQLString } = graphql;

const DescriptionClassType = new GraphQLObjectType({
  name: 'DescriptionClassType',
  fields: () => ({
    id: { type: GraphQLID },
    name: {
      type: GraphQLString
    }
  })
});

module.exports = DescriptionClassType;
