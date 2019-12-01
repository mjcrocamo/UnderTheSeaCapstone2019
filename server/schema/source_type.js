/**
 * Source Type
 *
 * Digital Media Design - Software Engineering Capstone 2019
 * Under the Sea: An interactive guide to our worlds oceans
 * @author Maggie Crocamo
 * {mjcrocamo@gmail.com, mjc494@g.harvard.edu}
 **/

const mongoose = require('mongoose');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;
const Source = mongoose.model('source');
const SourceTypeType = require('./source_type_type');

const SorceType = new GraphQLObjectType({
  name: 'SourceType',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    url: { type: GraphQLString },
    source: { type: GraphQLString },
    type: {
      type: SourceTypeType,
      async resolve(parentValue) {
        return await Source.findById(parentValue)
          .populate('type')
          .then(source => {
            return source.type;
          });
      }
    }
  })
});

module.exports = SorceType;
