import React, { Component } from 'react';
import { fetchFilmsList } from '../services/fetcher';
import { Home } from '../components/home/Home';
import styles from '../components/search/SearchFilms.module.css';

const searchFilms = (search, movies) => {
  return movies.filter(movie =>
    movie.title.toLowerCase().includes(search.toLowerCase()),
  );
};

export default class HomePage extends Component {
  state = {
    movies: [],
    message: null,
    search: '',
  };

  componentDidMount() {
    this.getFilmsList();
  }

  sortByField(field) {
    return (a, b) => (a[field] > b[field] ? 1 : -1);
  }

  getFilmsList = async () => {
    try {
      const movies = await fetchFilmsList();
      const moviesListAndSort = movies.data.results.sort(
        this.sortByField('title'),
      );
      this.setState({ movies: moviesListAndSort });
    } catch (message) {
      this.setState({ message });
    }
  };

  handleChange = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { movies, search } = this.state;
    const searchedFilms = searchFilms(search, movies);
    return (
      <>
        <form onSubmit={this.handleSubmit} className={styles.form}>
          <input
            className={styles.input}
            type="text"
            placeholder="Search films"
            value={search}
            onChange={this.handleChange}
          />
        </form>
        <Home movies={searchedFilms} />
      </>
    );
  }
}
