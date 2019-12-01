/**
 * Conservation Link Page Component Test
 *
 * Digital Media Design - Software Engineering Capstone 2019
 * Under the Sea: An interactive guide to our worlds oceans
 * @author Maggie Crocamo
 * {mjcrocamo@gmail.com, mjc494@g.harvard.edu}
 **/

import React from 'react';
import { mount } from 'enzyme';
import ConservationLinkPage from '../ConservationLinkPage';
import { OceanConservationPlaceholder } from '../UnderTheSeaPlaceholders';
import { MockedProvider } from '@apollo/react-testing';
import { oceanConservationQuery } from '../UnderTheSeaQueries';
import Card from '@material-ui/core/Card';

const wait = require('wait');

const mocks = [
  {
    request: {
      query: oceanConservationQuery
    },
    result: {
      data: {
        conservationLinks: [
          {
            __typename: 'ConservationLinkType',
            id: '5da399a741ff724ae43120c8',
            name: 'The New England Aquarium',
            url: 'https://www.neaq.org/',
            descriptions: [
              {
                __typename: 'DescriptionType',
                id: '5da51c40eb310c63fa307141',
                content:
                  'The New England Aquarium is a great resource to join others who are passionate about ‘Protecting the Blue Planet’. They offer lectures and learning opportunities on aquarium visits, as well as opportunities to join their community as a volunteer. They also take donations. They hope to achieve change within our ocean environments and make a lasting impact on others through all of these avenues.'
              }
            ]
          },
          {
            __typename: 'ConservationLinkType',
            id: '5da39bc641ff724ae43120d3',
            name: 'Alliance to End Plastic Waste',
            url: 'https://endplasticwaste.org/',
            descriptions: [
              {
                __typename: 'DescriptionType',
                id: '5da520b2eb310c63fa307155',
                content:
                  'The alliance to end plastic waste’s mission is to educate users about the effects of plastic waste on the global climate, as well as what we can do to help change how we’re producing and consuming plastics today. Their mission statement: Plastics provide many critical sanitary, safety, health preservation and convenience benefits. Even as we work aggressively to reduce plastic waste in the environment. '
              }
            ]
          }
        ]
      }
    }
  }
];

describe('The conservation link page', () => {
  test('Renders conservation links', () => {
    const wrapper = mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <ConservationLinkPage image={jest.fn()}/>
      </MockedProvider>
    );

    await wait(0); // wait for response

    expect(wrapper.find(Card)).toHaveLength(2);
    expect(wrapper.find(OceanConservationPlaceholder)).toHaveLength(0);
    wrapper.unmount();
  });
  test('Renders loading placeholders', () => {
    const wrapper = mount(
      <MockedProvider mocks={[]} addTypename={false}>
        <ConservationLinkPage image={jest.fn()} />
      </MockedProvider>
    );
    expect(wrapper.find(OceanConservationPlaceholder)).toHaveLength(1);
    wrapper.unmount();
  });
});
