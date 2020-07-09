import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const Planets = ({ planets }) => (
  <>
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
  planets: PropTypes.array,
};
