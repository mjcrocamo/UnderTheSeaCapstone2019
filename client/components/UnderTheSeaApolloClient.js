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
let endpointURL = '';
if (process.env.NODE_ENV === 'development') {
  endpointURL = `http://localhost:${process.env.PORT}/graphql`;
} else {
  endpointURL = 'https://mysterious-castle-34548.herokuapp.com/graphql';
}

export const logUrl = () => {
  console.log(endpointURL);
};

/**
 * The Apollo Client
 */
export const client = new ApolloClient({
  link: new HttpLink({ uri: endpointURL }),
  cache: new InMemoryCache({ dataIdFromObject: o => o.id })
});
