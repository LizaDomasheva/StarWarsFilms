import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
// import Cast from '../../pages/Cast';
// import Reviews from '../../pages/Reviews';
// import AddInfo from '../addInfo/AddInfo';
import styles from './movie.module.css';
import PropTypes from 'prop-types';
import { Planets } from '../detailFilmInfo/Planets';
import { Starships } from '../detailFilmInfo/Starships';
import { PlanetsAndStarships } from '../detailFilmInfo/PlanetsAndStarships';

// const imageUrl = 'https://image.tmdb.org/t/p/w500'

const Movie = ({
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
        <div className={styles.movieBox}>
          <div className={styles.movieDiv}>
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

            {/* <Planets planets={planets}/>
        <Starships starships={starships}/> */}
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

Movie.propTypes = {
  title: PropTypes.string,
  vote_average: PropTypes.number,
  overview: PropTypes.string,
  genres: PropTypes.array,
  poster_path: PropTypes.string,
  onGoBack: PropTypes.func,
  id: PropTypes.number,
};

export default withRouter(Movie);
