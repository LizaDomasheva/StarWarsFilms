import React, { Component, lazy, Suspense } from 'react';
import { fetchFilmDetail} from '../services/fetcher';

const getIdFromProps = props => props.match.params.id;

const Film = lazy(() =>
  import('../components/film/Film' /* webpackChunkName: 'film' */),
);

export default class FilmDetailsPage extends Component {
  state = {
    film: null,
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
      const film = await fetchFilmDetail(id);
      this.setState({
        film: film.data,
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
    const { film} = this.state;
    const id = Number(getIdFromProps(this.props));
    return (
      film && (
        <Suspense fallback={<h1>Loading...</h1>}>
          <Film {...film} id={id} onGoBack={this.handleGoBack} />
        </Suspense>
      )
    );
  }
}
