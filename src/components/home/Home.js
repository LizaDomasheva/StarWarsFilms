import React from 'react';
import { Link } from 'react-router-dom';
import styles from './home.module.css';
import PropTypes from 'prop-types';

export const Home = ({ films }) => (
  <>
    <h2 className={styles.title}>Star Wars films</h2>
    <ul>
      {films.map(film => {
        const id = film.url.slice(27, 28);
        return (
          <li key={id}>
            <Link
              to={{
                pathname: `/films/${id}`,
                state: { from: '/' },
              }}
            >
              {film.title}
            </Link>
          </li>
        );
      })}
    </ul>
  </>
);

Home.propTypes = {
  films: PropTypes.array,
};

export default Home;
