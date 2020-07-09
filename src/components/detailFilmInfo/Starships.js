import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const Starships = ({ starships }) => (
  <>
    <ul>
    <strong>Starships:</strong>
      {starships.map(starship => {
    const id = starship.slice(31, 33)
return (
        <li key={id}>
          <Link 
            to={{
              pathname: `/starships/${id}`,
              state: { from: `/films/${id}/starships` },
            }}
          >
            {starship}
          </Link>
        </li>
)



          })}
    </ul>
  </>
);

Starships.propTypes = {
  starships: PropTypes.array,
};

