/**
 * Under the Sea GraphQL Schema
 *
 * Digital Media Design - Software Engineering Capstone 2019
 * Under the Sea: An interactive guide to our worlds oceans
 * @author Maggie Crocamo
 * {mjcrocamo@gmail.com, mjc494@g.harvard.edu}
 **/

const graphql = require('graphql');
const { GraphQLSchema } = graphql;

const RootQueryType = require('./root_query_type');
const MutationType = require('./mutations');

module.exports = new GraphQLSchema({
  query: RootQueryType,
  mutation: MutationType
});
