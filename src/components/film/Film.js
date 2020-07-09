import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import styles from './film.module.css';
import PropTypes from 'prop-types';
import { Planets } from '../detailFilmInfo/Planets';
import { Starships } from '../detailFilmInfo/Starships';
import { PlanetsAndStarships } from '../detailFilmInfo/PlanetsAndStarships';

const Film = ({
  title,
  episode_id,
  opening_crawl,
  director,
  release_date,
  planets,
  starships,
  onGoBack,
  id,
  match,
}) => {
  return (
    <>
      <div className={styles.container}>
        <button type="button" onClick={onGoBack} className={styles.btn}>&#129044; Go back</button>	
        <div className={styles.filmBox}>
          <div className={styles.filmDiv}>
            <h2>{title}</h2>
            <p>
              <strong>Episode:</strong> {episode_id}
            </p>
            <h3>Overview</h3>
            <p>{opening_crawl}</p>
            <p>
              <strong>Director:</strong> {director}
            </p>
            <p>
              <strong>Date of release:</strong> {release_date}
            </p>
          </div>
        </div>
      </div>
      <div className={styles.infoBlock}>
        <PlanetsAndStarships id={id} />
        <Switch>
          <Route
            path={`${match.path}/planets`}
            exact
            render={props => <Planets {...props} id={id} planets={planets} />}
          />
          <Route
            path={`${match.path}/starships`}
            exact
            render={props => (
              <Starships {...props} id={id} starships={starships} />
            )}
          />
        </Switch>
      </div>
    </>
  );
};

Film.propTypes = {
  title: PropTypes.string,
  episode_id: PropTypes.number,
  opening_crawl: PropTypes.string,
  director: PropTypes.string,
  release_date: PropTypes.string,
  planets: PropTypes.array,
  starships: PropTypes.array,
  onGoBack: PropTypes.func,
  id: PropTypes.number,
};

export default withRouter(Film);
