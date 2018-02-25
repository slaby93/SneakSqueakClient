import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl';
import Popup from './Popup';
import DISCIPLINES from 'consts/disciplines';

export class Map extends React.PureComponent {
  constructor() {
    super();
    this.geojson = {
      type: 'FeatureCollection',
      features: [{
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [19, 51],
        },
        properties: {
          type: DISCIPLINES.AMERICAN_FOOTBALL,
          title: 'American Football Event',
          description: 'Washington, D.C.',
        },
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [19, 52],
        },
        properties: {
          type: DISCIPLINES.BASKETBALL,
          title: 'Basket Event',
          description: 'San Francisco, California',
        },
      }],
    };
  }

  componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2xhYnkiLCJhIjoiY2pidW1jemFuMWs2ZDMzcWgzanBna29raiJ9.B0ZqQv8JnqOMX9qfXFollw';
    this.map = new mapboxgl.Map({
      container: 'mapBox',
      center: [19, 51],
      zoom: 4,
      style: 'mapbox://styles/mapbox/streets-v10',
    });
    this.map.addControl(new mapboxgl.NavigationControl());
    this.geojson.features.forEach(this.createMarkerAndPopup);
  }

  createMarkerAndPopup = (marker) => {
    const {
      geometry: { coordinates },
      properties,
    } = marker;

    // Popup
    const popupElement = document.createElement('div');
    const popup = new mapboxgl.Popup({ offset: 10 })
      .setDOMContent(popupElement);
    ReactDOM.render(<Popup data={properties} map={this.map} />, popupElement);

    // Marker
    const el = document.createElement('div');
    el.className = 'marker';
    new mapboxgl.Marker(el)
      .setLngLat(coordinates)
      .setPopup(popup)
      .addTo(this.map);
  }


  render() {
    const { className } = this.props;

    return (
      <div className={className} id="mapBox" />
    );
  }
}


const StyledComponent = styled(Map)`
  display: flex;
  flex-grow: 1;

  .mapboxgl-popup {
    max-width: 200px;
  }

  .mapboxgl-popup-content {
    text-align: center;
    font-family: 'Open Sans', sans-serif;
  }

  .marker {
    --size: 20px;
    background-image: url('http://www.iconarchive.com/download/i103443/paomedia/small-n-flat/map-marker.ico');
    background-size: cover;
    width: var(--size);
    height: var(--size);
    border-radius: 50%;
    cursor: pointer;
  }
`;

export default StyledComponent;
