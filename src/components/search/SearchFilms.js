import React, { Component } from 'react';
import styles from './searchFilms.module.css';

export class SearchFilms extends Component {
  state = {
    value: '',
  };


  filteredFilms=() => {
    return this.props.films.filter(film => 
      film.title.toLowerCase().includes(this.state.value.toLowerCase()),
    );
  }

  handleChange = e => {
    this.setState({ value: e.target.value });
    this.filteredFilms()
  };

  searchFilter = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    const { value } = this.state;
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
        </form>
      </>
    );
  }
}