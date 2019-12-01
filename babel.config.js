/**
 * babel.config.js
 * Global babel config settings
 *
 * Digital Media Design - Software Engineering Capstone 2019
 * Under the Sea: An interactive guide to our worlds oceans
 * @author Maggie Crocamo
 * {mjcrocamo@gmail.com, mjc494@g.harvard.edu}
 **/

const presets = [
  [
    '@babel/preset-env',
    {
      targets: {
        edge: '17',
        firefox: '60',
        chrome: '67',
        safari: '11.1'
      },
      useBuiltIns: 'usage'
    }
  ],
  '@babel/preset-react',
  '@babel/preset-flow'
];

const plugins = [
  '@babel/plugin-transform-runtime',
  ['@babel/plugin-proposal-pipeline-operator', { proposal: 'minimal' }],
  '@babel/plugin-proposal-class-properties',
  '@babel/plugin-proposal-optional-chaining',
  '@babel/plugin-syntax-dynamic-import'
];

module.exports = { presets, plugins };
