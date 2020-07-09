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
        <div className={styles.filmBox}>
          <div className={styles.filmDiv}>
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
  name: PropTypes.string,
  climate: PropTypes.string,
  diameter: PropTypes.string,
  gravity: PropTypes.string,
  population: PropTypes.string,
};

export default PlanetDetails;