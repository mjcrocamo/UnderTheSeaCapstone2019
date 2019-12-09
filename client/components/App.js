/**
 * The App Component. The main under the sea application.
 *
 * Digital Media Design - Software Engineering Capstone 2019
 * Under the Sea: An interactive guide to our worlds oceans
 * @author Maggie Crocamo
 * {mjcrocamo@gmail.com, mjc494@g.harvard.edu}
 **/

import React, { useMemo } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { ThemeProvider } from '@material-ui/core/styles';
import { Switch, HashRouter as Router, Route } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import Container from '@material-ui/core/Container';
import NavBar from './NavBar';
import { createMuiTheme } from '@material-ui/core/styles';
import { client } from './UnderTheSeaApolloClient';
import asyncComponent from './AsyncComponent';
import { ROUTES } from './UnderTheSeaConstants';
import ErrorBoundary from './ErrorBoundary';
import { useAppStyles } from './UnderTheSeaStyles';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import {
  LazyLoadOceanConservationPlaceholder,
  LazyWelcomePageLayoutPlaceholder,
  SeaAnimalPageLayoutPlaceholder,
  WelcomePageCarouselPhotoPlaceholder,
  LazyGamePagePlaceholder,
  LazySourcesPlaceholder
} from './UnderTheSeaPlaceholders';

const NotFound = asyncComponent(
  () => import('./NotFound').then(module => module.default),
  WelcomePageCarouselPhotoPlaceholder
);

const SeaAnimalPageLayout = asyncComponent(
  () => import('./SeaAnimalPageLayout').then(module => module.default),
  SeaAnimalPageLayoutPlaceholder
);

const ConservationLinkPage = asyncComponent(
  () => import('./ConservationLinkPage').then(module => module.default),
  LazyLoadOceanConservationPlaceholder
);

const WelcomePageLayout = asyncComponent(
  () => import('./WelcomePageLayout').then(module => module.default),
  LazyWelcomePageLayoutPlaceholder
);

const GameDirections = asyncComponent(
  () => import('./GameDirections').then(module => module.default),
  LazyGamePagePlaceholder
);

const SourcesPage = asyncComponent(
  () => import('./SourcesPage').then(module => module.default),
  LazySourcesPlaceholder
);

const appRoutes = [
  {
    component: WelcomePageLayout,
    path: ROUTES.HOME
  },
  {
    component: SeaAnimalPageLayout,
    path: ROUTES.SEA_ANIMALS
  },
  {
    component: ConservationLinkPage,
    path: ROUTES.OCEAN_CONSERVATION
  },
  {
    component: GameDirections,
    path: ROUTES.GAMES
  },
  {
    component: SourcesPage,
    path: ROUTES.SOURCES
  }
];

/**
 * App Component
 */
const App = () => {
  const classes = useAppStyles();
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: 'dark',
          primary: { main: '#7b99a6' },
          secondary: {
            main: '#ffffff'
          }
        }
      }),
    [true]
  );
  return (
    <ErrorBoundary>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <div className="background">
            <Container className={classes.container}>
              <Router>
                <ScrollToTop />
                <NavBar />
                <Switch>
                  {appRoutes.map(({ component, path }) => (
                    <Route key={path} exact path={path} component={component} />
                  ))}
                  <Route component={NotFound} />
                </Switch>
              </Router>
              <Footer />
            </Container>
          </div>
        </ThemeProvider>
      </ApolloProvider>
    </ErrorBoundary>
  );
};

export default App;
