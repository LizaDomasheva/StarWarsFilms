import React, { Component, lazy, Suspense } from 'react';
// import Movie from '../components/movie/Movie';
import { fetchFilmDetail} from '../services/fetcher';

const getIdFromProps = props => props.match.params.id;

const Movie = lazy(() =>
  import('../components/movie/Movie.js' /* webpackChunkName: 'movie' */),
);

export default class MovieDetailsPage extends Component {
  state = {
    movie: null,
    massage: null,
    search: '',
    from: '',
    planet: null
  };

  componentDidMount() {
    this.props.location.state &&
      this.setState({
        search: this.props.location.state.search,
        from: this.props.location.state.from,
      });
    this.getFilmDetail();
  }

  getFilmDetail = async () => {
    try {
      const id = Number(getIdFromProps(this.props));
      const movie = await fetchFilmDetail(id);
      this.setState({
        movie: movie.data,
      });
    } catch (message) {
      this.setState({ message });
    }
  };

  handleGoBack = () => {
    this.state.search
      ? this.props.history.push({
          pathname: this.state.from,
          search: `query=${this.state.search}`,
          state: { search: this.state.search },
        })
      : this.props.history.push('/');
  };

  render() {
    const { movie} = this.state;
    const id = Number(getIdFromProps(this.props));
    return (
      movie && (
        <Suspense fallback={<h1>Loading...</h1>}>
          <Movie {...movie} id={id} onGoBack={this.handleGoBack} />
        </Suspense>
      )
    );
  }
}
