import React, { Component } from 'react';
import { fetchFilmsList } from '../services/fetcher';
import { Home } from '../components/home/Home';
import styles from '../components/search/searchFilms.module.css';

const searchFilms = (search, films) => {
  return films.filter(film =>
    film.title.toLowerCase().includes(search.toLowerCase()),
  );
};

export default class HomePage extends Component {
  state = {
    films: [],
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
      const films = await fetchFilmsList();
      const filmsListAndSort = films.data.results.sort(
        this.sortByField('title'),
      );
      this.setState({ films: filmsListAndSort });
    } catch (message) {
      this.setState({ message });
    }
  };

  handleChange = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { films, search } = this.state;
    const searchedFilms = searchFilms(search, films);
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
        <Home films={searchedFilms} />
      </>
    );
  }
}
