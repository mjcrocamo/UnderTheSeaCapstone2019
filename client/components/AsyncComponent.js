/**
 * Function for Lazy Loading Components
 * https://scotch.io/tutorials/lazy-loading-routes-in-react
 *
 * Digital Media Design - Software Engineering Capstone 2019
 * Under the Sea: An interactive guide to our worlds oceans
 * @author Maggie Crocamo
 * {mjcrocamo@gmail.com, mjc494@g.harvard.edu}
 **/
import React, { Component } from 'react';

/**
 * The async Component. Used for Lazy Loading main Route components
 *
 * @param {*} props
 */
const asyncComponent = (getComponent, PlaceHolder) => {
  class AsyncComponent extends Component {
    static Component = null;
    state = { Component: AsyncComponent.Component };

    componentDidMount() {
      if (!this.state.Component) {
        getComponent().then(Component => {
          AsyncComponent.Component = Component;
          this.setState({ Component });
        });
      }
    }
    render() {
      const { Component } = this.state;
      if (Component) {
        return <Component {...this.props} />;
      }
      return <PlaceHolder />;
    }
  }
  return AsyncComponent;
};

export default asyncComponent;
