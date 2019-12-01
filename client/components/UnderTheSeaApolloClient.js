/**
 * The Apollo Client configuration for Under the Sea Application
 *
 * Digital Media Design - Software Engineering Capstone 2019
 * Under the Sea: An interactive guide to our worlds oceans
 * @author Maggie Crocamo
 * {mjcrocamo@gmail.com, mjc494@g.harvard.edu}
 **/

import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

/**
 * The graph endpoint url
 */
const endpointURL = process.env.GRAPHQL_URI;

/**
 * The Apollo Client
 */
export const client = new ApolloClient({
  link: new HttpLink({ uri: endpointURL }),
  cache: new InMemoryCache({ dataIdFromObject: o => o.id })
});
