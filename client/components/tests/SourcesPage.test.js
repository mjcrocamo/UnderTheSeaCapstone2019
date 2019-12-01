/**
 * Sources Page Component Test
 *
 * Digital Media Design - Software Engineering Capstone 2019
 * Under the Sea: An interactive guide to our worlds oceans
 * @author Maggie Crocamo
 * {mjcrocamo@gmail.com, mjc494@g.harvard.edu}
 **/

import React from 'react';
import { mount } from 'enzyme';
import SourcesPage from '../SourcesPage';
import { sourcesQuery } from '../UnderTheSeaQueries';
import { MockedProvider } from '@apollo/react-testing';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { SourcesPlaceholder } from '../UnderTheSeaPlaceholders';

const wait = require('wait');

const mocks = [
  {
    request: {
      query: sourcesQuery
    },
    result: {
        data: {
          sources:[
            {
              __typename:"SourceType",
              id:"5dc76054e66e2937e06f54c9",
              name:"The Great Ocean Clean Up: Game Art",
              url:"https://opengameart.org/",
              source:"Xom Adept on Mon, 2019-09-30 14:21, et al. “OpenGameArt.org.” OpenGameArt.org, OpenGameArt.org, https://opengameart.org/."
            },
            {
              __typename:"SourceType",
              id:"5dc76107e66e2937e06f54ca",
              name:"Stevey the Penguin: Ripped by Boo",
              url:"https://www.spriters-resource.com/pc_computer/maplestory/sheet/22477/",
              source:"“PC / Computer - MapleStory - Scuba Pepe.” The Spriters Resource, https://www.spriters-resource.com/pc_computer/maplestory/sheet/22477/."
            }
          ]
        }
    }
  }
];

describe('The sources page', () => {
  test('Renders sources information', () => {
    const wrapper = mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <SourcesPage />
      </MockedProvider>
    );

    await wait(0); // wait for response

    expect(wrapper.find(List)).toHaveLength(5);
    expect(wrapper.find(ListItem)).toHaveLength(10);
    expect(wrapper.find(SourcesPlaceholder)).toHaveLength(0);
    wrapper.unmount();
  });
  test('Renders loading placeholders', () => {
    const wrapper = mount(
      <MockedProvider mocks={[]} addTypename={false}>
        <SourcesPage />
      </MockedProvider>
    );
    expect(wrapper.find(SourcesPlaceholder)).toHaveLength(5);
    wrapper.unmount();
  });
});
