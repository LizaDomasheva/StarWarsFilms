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
        <div className={styles.filmBox}>
          <div className={styles.filmDiv}>
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
  name: PropTypes.string,
  starship_class: PropTypes.string,
  cargo_capacity: PropTypes.string,
  consumables: PropTypes.string,
};

export default StarshipDetails;