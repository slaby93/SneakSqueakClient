import React from 'react';
import styled from 'styled-components';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl';

export class Map extends React.PureComponent {
  componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2xhYnkiLCJhIjoiY2pidW1jemFuMWs2ZDMzcWgzanBna29raiJ9.B0ZqQv8JnqOMX9qfXFollw';
    this.map = new mapboxgl.Map({
      container: 'mapBox',
      center: [19.939418, 50.061705], // starting position [lng, lat]
      zoom: 12, // starting zoom
      style: 'mapbox://styles/mapbox/streets-v10',
    });
    this.map.addControl(new mapboxgl.NavigationControl());
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
`;

export default StyledComponent;
