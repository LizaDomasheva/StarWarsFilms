import React, { lazy, Suspense } from 'react';
import {Route, Switch } from 'react-router-dom';

const HomePage = lazy(() =>
  import('../pages/HomePage' /* webpackChunkName: 'home-page' */),
);

const FilmDetailsPage = lazy(() =>
  import(
    '../pages/FilmDetailsPage' /* webpackChunkName: 'filmDetails-page' */
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
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route path="/" exact render={props => <HomePage {...props} />} />
          <Route
            path="/films/:id"
            render={props => <FilmDetailsPage {...props} />}
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
  );
}

export default App;
