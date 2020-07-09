import React from 'react';
import PropTypes from 'prop-types';
import styles from './planetAndStarship.module.css';

 const PlanetDetails = ({
  name,
  climate,
  diameter,
  gravity,
  population,
}) => {
  const climateNew = climate[0].toUpperCase() + climate.slice(1);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.movieBox}>
          <div className={styles.movieDiv}>
            <h2 className={styles.title}>{name}</h2>
            <p>
              <strong>Climate:</strong> {climateNew}
            </p>
            <p>
              <strong>Diameter:</strong> {diameter}
            </p>
            <p>
              <strong>Gravity:</strong> {gravity}
            </p>
            <p>
              <strong>Population:</strong> {population}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

PlanetDetails.propTypes = {
  title: PropTypes.string,
  vote_average: PropTypes.number,
  overview: PropTypes.string,
  genres: PropTypes.array,
  poster_path: PropTypes.string,
  onGoBack: PropTypes.func,
  id: PropTypes.number,
};


export default PlanetDetails;