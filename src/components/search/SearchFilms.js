import React, { Component, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import styles from './SearchFilms.module.css';

// const QueryList = lazy(() =>
//   import('./QueryList' /* webpackChunkName: 'queryList' */),
// );

export class SearchFilms extends Component {
  state = {
    // query: '',
    value: '',
  };

  // componentDidMount() {
  //   this.props.location.state &&
  //     this.setState({ query: this.props.location.state.search });
  // }

  filteredFilms=() => {
    console.log('this.state.value :>> ', this.state.value);
    return this.props.films.filter(film => 
      film.title.toLowerCase().includes(this.state.value.toLowerCase()),
    );
  }

  handleChange = e => {
    this.setState({ value: e.target.value });
    this.filteredFilms()
  };

  // handleSubmit = e => {
  //   e.preventDefault();
  //   const query = e.target.elements[0].value;
  //   if (query === '') {
  //     alert('Make your search');
  //   } else {
  //     this.setState({ query: q });
  //   }
  // };

  searchFilter = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    const { query, value } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit} className={styles.form}>
          <input
            className={styles.input}
            type="text"
            placeholder="Search films"
            value={value}
            onChange={this.handleChange}
          />
          {/* <button
            className={styles.button}
            type="submit"
            onChange={this.handleChange}
          >
            Search
          </button> */}
        </form>
        {/* <Suspense fallback={<h1>Loading...</h1>}>
          <Route
            path="/movies"
            render={props => <QueryList {...props} query={query} />}
          />{' '}
        </Suspense> */}
      </>
    );
  }
}