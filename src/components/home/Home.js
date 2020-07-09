import React from 'react';
import { Link } from 'react-router-dom';
import styles from './home.module.css';
import PropTypes from 'prop-types';

export const Home = ({ movies }) => (
  <>
    <h2 className={styles.title}>Star Wars films</h2>
    <ul>
      {movies.map(movie => {
        const id = movie.url.slice(27, 28)
return (
        <li key={id}>
          <Link 
            to={{
              pathname: `/films/${id}`,
              state: { from: '/' },
            }}
          >
            {movie.title}
          </Link>
        </li>
)



          })}
    </ul>
  </>
);

Home.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
};

export default Home;
