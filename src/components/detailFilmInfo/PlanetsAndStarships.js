import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './detailFilmInfo.module.css';
import PropTypes from 'prop-types';

export const PlanetsAndStarships = ({ id }) => (
  <ul className={styles.list}>
    <li>
      <NavLink
        exact
        activeStyle={{
          fontWeight: 'bold',
          color: 'red',
        }}
        to={{
          pathname: `/films/${id}/planets`,
          state: { from: '/' },
        }}
      >
        Planets
      </NavLink>
    </li>
    <li>
      <NavLink
        exact
        activeStyle={{
          fontWeight: 'bold',
          color: 'red',
        }}
        to={{
          pathname: `/films/${id}/starships`,
          state: { from: '/' },
        }}
      >
        Starships
      </NavLink>
    </li>
  </ul>
);

PlanetsAndStarships.propTypes = {
  id: PropTypes.number.isRequired,
};
