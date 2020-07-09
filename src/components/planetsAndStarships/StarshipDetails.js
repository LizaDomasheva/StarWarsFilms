import React from 'react';
import PropTypes from 'prop-types';
import styles from './planetAndStarship.module.css';

const StarshipDetails = ({
  name,
  starship_class,
  manufacturer,
  cargo_capacity,
  consumables,
}) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.movieBox}>
          <div className={styles.movieDiv}>
            <h2 className={styles.title}>{name}</h2>
            <p>
              <strong>Class:</strong> {starship_class}
            </p>
            <p>
              <strong>Manufacturer:</strong> {manufacturer}
            </p>
            <p>
              <strong>Cargo capacity:</strong> {cargo_capacity}
            </p>
            <p>
              <strong>Consumables:</strong> {consumables}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

StarshipDetails.propTypes = {
  title: PropTypes.string,
  vote_average: PropTypes.number,
  overview: PropTypes.string,
  genres: PropTypes.array,
  poster_path: PropTypes.string,
  onGoBack: PropTypes.func,
  id: PropTypes.number,
};

export default StarshipDetails;