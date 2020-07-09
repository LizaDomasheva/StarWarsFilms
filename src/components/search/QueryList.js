import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import { fetchSearchMovie } from '../../services/fetcher';
import PropTypes from 'prop-types';

export default class QueryList extends Component {
  state = {
    moviesList: [],
    message: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query) {
      this.getSearchMovie();
    }
  }

  componentDidMount() {
    if (this.props.location.search) {
      this.getSearchMovie();
    }
  }

  getSearchMovie = async () => {
    try {
      const parsed = queryString.parse(this.props.history.location.search);
      const query = parsed.query;
      const moviesList = await fetchSearchMovie(query);
      if (moviesList.data.results.length >= 1) {
        this.setState({ moviesList: moviesList.data.results });
      } else {
        return alert('This is not relevant search parameter 😢 Try again');
      }
    } catch (message) {
      this.setState({ message });
    }
  };

  render() {
    const { moviesList } = this.state;
    return (
      <ul>
        {moviesList &&
          moviesList.map(item => (
            <li key={item.id}>
              <Link
                to={{
                  pathname: `/movies/${item.id}`,
                  // state: { from: `/movies?query=${this.props.query}` },
                  state: {
                    from: this.props.location.pathname,
                    search: this.props.query,
                  },
                }}
              >
                {item.title}
              </Link>
            </li>
          ))}
      </ul>
    );
  }
}

QueryList.propTypes = {
  query: PropTypes.string,
};
