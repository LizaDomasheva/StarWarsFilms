import React, { Component, lazy, Suspense } from 'react';
// import {PlanetDetails} from '../components/planetsAndStarships/PlanetDetails'
import { fetchPlanetDetail} from '../services/fetcher';


const getIdFromProps = props => props.match.params.id;

const PlanetDetails = lazy(() =>
  import('../components/planetsAndStarships/PlanetDetails.js' /* webpackChunkName: 'planet' */),
);

export default class PlanetDetailsPage extends Component {
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
    this.getPlanetDetail();
  }

  getPlanetDetail = async () => {
    try {
      const id = Number(getIdFromProps(this.props));
      const planet = await fetchPlanetDetail(id);
      this.setState({
        planet: planet.data,
      });
    } catch (message) {
      this.setState({ message });
    }
  };


  render() {
    const {planet} = this.state;
    const id = Number(getIdFromProps(this.props));
    return (
        planet && (
        <Suspense fallback={<h1>Loading...</h1>}>
          <PlanetDetails {...planet} id={id} />
        </Suspense>
      )
    );
  }
}
