/**
 * Sea Animal Layout Page Component Test
 *
 * Digital Media Design - Software Engineering Capstone 2019
 * Under the Sea: An interactive guide to our worlds oceans
 * @author Maggie Crocamo
 * {mjcrocamo@gmail.com, mjc494@g.harvard.edu}
 **/

import React from 'react';
import { mount } from 'enzyme';
import { SeaAnimalPageLayoutPlaceholder } from '../UnderTheSeaPlaceholders';
import { MockedProvider } from '@apollo/react-testing';
import SeaAnimalPageLayout from '../SeaAnimalPageLayout';
import { seaAnimalListQuery } from '../UnderTheSeaQueries';
import Card from '@material-ui/core/Card';

const wait = require('wait');

const mocks = [
  {
    request: {
      query: seaAnimalListQuery
    },
    result: {
      data:{
        seaAnimals:[
          {
            __typename:"SeaAnimalType",
            id:"5d9d52c67312ba5344711c9f",
            name:"Green Sea Turtle",
            binomialName:"Chelonia mydas",
            mainImage: {
              __typename:"ImageType",
              id:"5d9d532e7312ba5344711ca0",
              url:"main_green_sea_turtle.png",
              alt:"Green Sea Turtle"
            }
          },
          {
            __typename:"SeaAnimalType",
            id:"5d9d54c9a8b4ef698ad552e1",
            name:"Octopus",
            binomialName:"Octopus vulgaris",
            mainImage: {
              __typename:"ImageType",
              id:"5d9d554de0c00d6c6ff59917",
              url:"main_octopus.png",
              alt:"Octopus"
            }
          },
          {
            __typename:"SeaAnimalType",
            id:"5d9e710af1db8a887340dd5d",
            name:"Sea Star",
            binomialName:"Asteroidea",
            mainImage: {
              __typename:"ImageType",
              id:"5d9e71a0f1db8a887340dd5e",
              url:"main_sea_star.png",
              alt:"Sea Star"
            }
          }
        ]
      }
    }
  }
];

describe('The sea animal page', () => {
  test('Renders list of sea animals', () => {
    const wrapper = mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <SeaAnimalPageLayout />
      </MockedProvider>
    );

    await wait(0); // wait for response

    expect(wrapper.find(Card)).toHaveLength(3);
    expect(wrapper.find(SeaAnimalPageLayoutPlaceholder)).toHaveLength(0);
    wrapper.unmount();
  });
  test('Renders loading placeholders', () => {
    const wrapper = mount(
      <MockedProvider mocks={[]} addTypename={false}>
        <SeaAnimalPageLayout />
      </MockedProvider>
    );
    expect(wrapper.find(SeaAnimalPageLayoutPlaceholder)).toHaveLength(1);
    wrapper.unmount();
  });
});
