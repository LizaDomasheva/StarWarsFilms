import React, { lazy, Suspense } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
// import PlanetDetailsPage from '../pages/PlanetDetailsPage';
// import StarshipDetailsPage from '../pages/StarshipDetailsPage';

// import HomePage from '../pages/HomePage';
// import MoviesPage from '../pages/moviesPage/MoviesPage';
// import MovieDetailsPage from '../pages/MovieDetailsPage';
// import ErrorPage from '../pages/ErrorPage';
// import Nav from './nav/Nav';

const HomePage = lazy(() =>
  import('../pages/HomePage' /* webpackChunkName: 'home-page' */),
);

const MovieDetailsPage = lazy(() =>
  import(
    '../pages/MovieDetailsPage' /* webpackChunkName: 'movieDetails-page' */
  ),
);

const PlanetDetailsPage = lazy(() =>
  import(
    '../pages/PlanetDetailsPage' /* webpackChunkName: 'planetDetails-page' */
  ),
);

const StarshipDetailsPage = lazy(() =>
  import(
    '../pages/StarshipDetailsPage' /* webpackChunkName: 'StarshipDetails-page' */
  ),
);

const ErrorPage = lazy(() =>
  import('../pages/ErrorPage' /* webpackChunkName: 'error-page' */),
);

function App() {
  return (
    <HashRouter basename='/'>
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route path="/" exact render={props => <HomePage {...props} />} />
          <Route
            path="/films/:id"
            render={props => <MovieDetailsPage {...props} />}
          />
          <Route
            path="/planets/:id"
            render={props => <PlanetDetailsPage {...props} />}
          />
          <Route
            path="/starships/:id"
            render={props => <StarshipDetailsPage {...props} />}
          />
          <Route component={ErrorPage} />
        </Switch>
      </Suspense>
    </>
    </HashRouter>
  );
}

export default App;
