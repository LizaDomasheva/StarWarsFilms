import React from 'react';
import { Link } from 'react-router-dom';
// import styles from './home.module.css';
import PropTypes from 'prop-types';

export const Planets = ({ planets }) => (
  <>
    {/* <h2 className={styles.title}>Star Wars films</h2> */}
    <ul>
      <strong>Planets:</strong>
      {planets.map(planet => {
        const id = planet.slice(29, 31);
        return (
          <li key={id}>
            <Link
              to={{
                pathname: `/planets/${id}`,
                state: { from: `/films/${id}/planets` },
              }}
            >
              {planet}
            </Link>
          </li>
        );
      })}
    </ul>
  </>
);

Planets.propTypes = {
  title: PropTypes.string,
  id: PropTypes.number,
};
