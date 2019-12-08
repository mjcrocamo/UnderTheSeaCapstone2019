/**
 * The Under the Sea Welcome Page Layout Component
 * Provides the layout for the Welcome Page
 *
 * Digital Media Design - Software Engineering Capstone 2019
 * Under the Sea: An interactive guide to our worlds oceans
 * @author Maggie Crocamo
 * {mjcrocamo@gmail.com, mjc494@g.harvard.edu}
 **/

import React, { Fragment } from 'react';
import WelcomeTopics from './WelcomePageTopics';
import WelcomePageCarouselSection from './WelcomePageCarouselSection';
import { logUrl } from './UnderTheSeaApolloClient';

/**
 * WelcomePageLayout Component
 */
const WelcomePageLayout = () => {
  console.log(logUrl());
  return (
    <Fragment>
      <WelcomePageCarouselSection />
      <WelcomeTopics />
    </Fragment>
  );
};

export default WelcomePageLayout;
