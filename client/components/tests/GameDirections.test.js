/**
 * Game Directions Component Test
 *
 * Digital Media Design - Software Engineering Capstone 2019
 * Under the Sea: An interactive guide to our worlds oceans
 * @author Maggie Crocamo
 * {mjcrocamo@gmail.com, mjc494@g.harvard.edu}
 **/

import React from 'react';
import { mount } from 'enzyme';
import GameDirections from '../GameDirections';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

describe('The game directions page', () => {
  test('Renders correctly', () => {
    const wrapper = mount(
      <GameDirections image={jest.fn()} game={jest.fn()} />
    );
    expect(wrapper.find(Paper)).toHaveLength(1);
    expect(wrapper.find(Grid)).toHaveLength(6);
    wrapper.unmount();
  });
});
