/**
 * Under the Sea GraphQL queries
 *
 * Digital Media Design - Software Engineering Capstone 2019
 * Under the Sea: An interactive guide to our worlds oceans
 * @author Maggie Crocamo
 * {mjcrocamo@gmail.com, mjc494@g.harvard.edu}
 **/

import gql from 'graphql-tag';

/**
 * Sea Animal Details Query
 */
export const seaAnimalDetailsQuery = gql`
  query SeaAnimalDetailsQuery($seaAnimalId: ID!) {
    seaAnimal(id: $seaAnimalId) {
      __typename
      id
      name
      binomialName
      minSizeInches
      maxSizeInches
      minSizeFeet
      maxSizeFeet
      minWeightlbs
      maxWeightlbs
      animalClass
      diet
      averageLifeSpan
      images {
        __typename
        id
        url
        alt
      }
      descriptions {
        __typename
        id
        content
      }
      links {
        __typename
        id
        name
        url
      }
      videos {
        __typename
        id
        url
        alt
      }
      mainImage {
        __typename
        id
        url
        alt
      }
    }
  }
`;

/**
 * Welcome Page Query
 */
export const welcomePageQuery = gql`
  query WelcomePageQuery {
    seaAnimals {
      __typename
      id
      name
      binomialName
      mainImage {
        __typename
        id
        url
        alt
      }
    }
  }
`;

/**
 * Welcome Topics Query
 */
export const welcomeTopicsQuery = gql`
  query WelcomeTopicsQuery {
    welcomeTopics {
      __typename
      id
      title
      image
      description
      route
    }
  }
`;

/**
 * Sea Animal List Query
 */
export const seaAnimalListQuery = gql`
  query SeaAnimalListQuery {
    seaAnimals {
      __typename
      id
      name
      binomialName
      mainImage {
        __typename
        id
        url
        alt
      }
    }
  }
`;

/**
 * Ocean Conservation Query
 */
export const oceanConservationQuery = gql`
  query OceanConservationQuery {
    conservationLinks {
      __typename
      id
      name
      url
      descriptions {
        __typename
        id
        content
      }
    }
  }
`;

/**
 * Sources Query
 */
export const sourcesQuery = gql`
  query SourcesQuery($typeId: ID) {
    sources(typeId: $typeId) {
      __typename
      id
      name
      url
      source
    }
  }
`;
