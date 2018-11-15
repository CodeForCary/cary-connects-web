import React, { Component } from "react";
import L from "leaflet";
import {
  Map as LeafletMap,
  TileLayer,
  Marker,
  Polygon
} from "react-leaflet";
import icon from "../../assets/map-marker-2.svg";
import { Context } from "../../components/Provider";
import "./styles.css";

const pIcon = L.icon({
  iconUrl: icon,
  iconSize: [32, 32],
  shadowSize: [50, 64],
  iconAnchor: [15, 31]
})

class Map extends Component {
  state = {
    minZoom: 15,
    animate: true,
    bounds: [[35.773958, -78.798776], [35.796304, -78.761682]]
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        userLocation: {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      });
    });
  }

  render() {
    if (!this.props.polygonData) {
      return <div></div>;
    }

    return (
      // build a Map
      <div>
      <Context.Consumer>
        {context => (
          <LeafletMap
            className="map"
            maxBounds={this.state.bounds}
            center={context.state.location}
            minZoom={this.state.minZoom}
            zoom={context.state.zoom}
            markers={context.state.markers}
          >
            <TileLayer // attribution is required for OSM
              attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker icon={pIcon} position={context.state.markers[0]}></Marker>

            {this.props.polygonData.map(polygonData => (
              <Polygon
                onClick={(event) => {context.createLotMarker(polygonData); context.clickPolygon(event);}}
                positions={polygonData.geometry.coordinates[0]}
                color="red"
                name={polygonData.properties.name}
                key={polygonData.geometry.coordinates[0]}
              >
              </Polygon>
            ))}
          </LeafletMap>
        )}
      </Context.Consumer>
      </div>
    );
  }
}

export default Map;
