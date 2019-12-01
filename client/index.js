/**
 * Index.js: Project Entry Point
 * Root Component renders the App component
 *
 * Digital Media Design - Software Engineering Capstone 2019
 * Under the Sea: An interactive guide to our worlds oceans
 * @author Maggie Crocamo
 * {mjcrocamo@gmail.com, mjc494@g.harvard.edu}
 **/
import './style/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';

const Root = () => {
  return <App />;
};

ReactDOM.render(<Root />, document.querySelector('#root'));
