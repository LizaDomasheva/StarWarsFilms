import React, { Component, lazy, Suspense } from 'react';
import { fetchStarshipDetail } from '../services/fetcher';

const getIdFromProps = props => props.match.params.id;

const StarshipDetails = lazy(() =>
  import(
    '../components/planetsAndStarships/StarshipDetails' /* webpackChunkName: 'movie' */
  ),
);

export default class StarshipDetailsPage extends Component {
  state = {
    movie: null,
    massage: null,
    search: '',
    from: '',
    starship: null,
  };

  componentDidMount() {
    this.props.location.state &&
      this.setState({
        search: this.props.location.state.search,
        from: this.props.location.state.from,
      });
    this.getStarshipDetail();
  }

  getStarshipDetail = async () => {
    try {
      const id = Number(getIdFromProps(this.props));
      const starship = await fetchStarshipDetail(id);
      this.setState({
        starship: starship.data,
      });
    } catch (message) {
      this.setState({ message });
    }
  };

  render() {
    const { starship } = this.state;
    const id = Number(getIdFromProps(this.props));
    return (
      starship && (
        <Suspense fallback={<h1>Loading...</h1>}>
          <StarshipDetails {...starship} id={id} />
        </Suspense>
      )
    );
  }
}
