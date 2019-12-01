/**
 * Welcome Page Layout Component Test
 *
 * Digital Media Design - Software Engineering Capstone 2019
 * Under the Sea: An interactive guide to our worlds oceans
 * @author Maggie Crocamo
 * {mjcrocamo@gmail.com, mjc494@g.harvard.edu}
 **/

import React from 'react';
import { shallow } from 'enzyme';
import WelcomePageLayout from '../WelcomePageLayout';
import WelcomeTopics from './WelcomePageTopics';
import WelcomePageCarouselSection from './WelcomePageCarouselSection';

describe('The welcome page', () => {
  test('Renders component correctly', () => {
    const wrapper = shallow(<WelcomePageLayout />);
    expect(wrapper.find(WelcomeTopics)).toHaveLength(2);
    expect(wrapper.find(WelcomePageCarouselSection)).toHaveLength(12);
    wrapper.unmount();
  });
});
