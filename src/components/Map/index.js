import React, { Component } from "react";
import L from "leaflet";
import {
  Map as LeafletMap,
  TileLayer,
  Marker,
  Polygon,
  Popup
} from "react-leaflet";
import PropTypes from "prop-types";
import parkingIcon from "../../assets/parkingIcon.png";
import userIcon from "../../assets/userIcon.svg";
import Button from "@material-ui/core/Button";
import { Context } from "../../components/Provider";
import "./styles.css";

// Due to a bug in react-leaflet Marker isn't working.
// Using Leaflet to create an image
var myIcon = L.icon({
  iconUrl:
    "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDY0IDY0OyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qxe2ZpbGw6IzQxNDA0Mjt9Cgkuc3Qye2ZpbGw6IzhEQzYzRjt9Cgkuc3Qze2ZpbGw6I0QxMkUyMjt9Cgkuc3Q0e2ZpbGw6I0REM0EzQTt9Cgkuc3Q1e2ZpbGw6I0U4MzEyRDt9Cgkuc3Q2e2ZpbGw6I0Y5M0UyNjt9Cgkuc3Q3e2ZpbGw6I0E3RTA0Qzt9Cgkuc3Q4e2ZpbGw6I0M4RkY1Rjt9Cgkuc3Q5e2ZpbGw6I0ZGNkY2NDt9Cgkuc3QxMHtmaWxsOiNCMEVENEY7fQoJLnN0MTF7ZmlsbDojNTg1OTVCO30KCS5zdDEye2ZpbGw6I0ZGNEE2RDt9Cgkuc3QxM3tmaWxsOiM1OUU1Rjc7fQoJLnN0MTR7ZmlsbDojRkY1MjdCO30KCS5zdDE1e2ZpbGw6IzU3RjNGRjt9Cgkuc3QxNntmaWxsOiNGRjVBODE7fQoJLnN0MTd7ZmlsbDojNTVFMEUwO30KCS5zdDE4e2ZpbGw6IzU2RUJFRjt9Cgkuc3QxOXtmaWxsOiNBNkZGRkY7fQoJLnN0MjB7ZmlsbDojNTNEQ0UwO30KCS5zdDIxe2ZpbGw6I0U2RTdFODt9Cgkuc3QyMntmaWxsOiNGMUYyRjI7fQoJLnN0MjN7ZmlsbDojRkJCMDQwO30KCS5zdDI0e2ZpbGw6I0UwMzYyODt9Cgkuc3QyNXtmaWxsOiNGRjgwNzY7fQoJLnN0MjZ7ZmlsbDojQzVGOUY1O30KCS5zdDI3e2ZpbGw6I0U2RkZGRDt9Cgkuc3QyOHtmaWxsOiNGRjY4NUM7fQoJLnN0Mjl7ZmlsbDojRTAzNDI3O30KCS5zdDMwe2ZpbGw6I0JBRTBEQzt9Cgkuc3QzMXtmaWxsOiNGRkU2MDA7fQoJLnN0MzJ7ZmlsbDojRkZBQUE0O30KCS5zdDMze2ZpbGw6I0ZGODQ3Qjt9Cgkuc3QzNHtmaWxsOiNEODMyMjU7fQoJLnN0MzV7ZmlsbDojRjlDOTQxO30KCS5zdDM2e2ZpbGw6I0ZGNzFCRjt9Cgkuc3QzN3tmaWxsOiNGRkE5RDg7fQoJLnN0Mzh7ZmlsbDojRkZFQUI2O30KCS5zdDM5e2ZpbGw6I0QzQTYzNzt9Cgkuc3Q0MHtmaWxsOiNGRkIzRTA7fQoJLnN0NDF7ZmlsbDojRkZERjk3O30KCS5zdDQye2ZpbGw6I0U1NjdCMjt9Cgkuc3Q0M3tmaWxsOiNEQkRCREI7fQoJLnN0NDR7ZmlsbDojRERBRTNBO30KCS5zdDQ1e2ZpbGw6I0UzRkZGQzt9Cgkuc3Q0NntmaWxsOiNCNUUyREU7fQoJLnN0NDd7ZmlsbDojRTI0NzZDO30KCS5zdDQ4e2ZpbGw6I0ZGRTYwMzt9Cgkuc3Q0OXtmaWxsOiNFQUNBMEY7fQoJLnN0NTB7ZmlsbDojRkY5RkI2O30KCS5zdDUxe2ZpbGw6I0ZGOTlCMTt9Cgkuc3Q1MntmaWxsOiNFNTQ4NkU7fQoJLnN0NTN7ZmlsbDojRDFGMkYxO30KCS5zdDU0e2ZpbGw6IzgwODI4NTt9Cgkuc3Q1NXtmaWxsOiNCRkQ4RDY7fQoJLnN0NTZ7ZmlsbDojRTZGRkZFO30KCS5zdDU3e2ZpbGw6I0E1QTZBODt9Cgkuc3Q1OHtmaWxsOiM2RjcwNzI7fQoJLnN0NTl7ZmlsbDojRjlDMDQxO30KCS5zdDYwe2ZpbGw6I0QxRDFEMTt9Cgkuc3Q2MXtmaWxsOiNDNEM1QzY7fQoJLnN0NjJ7ZmlsbDojRDFEM0Q0O30KCS5zdDYze2ZpbGw6I0UyQUQ0Mjt9Cgkuc3Q2NHtmaWxsOiNENkE0M0U7fQoJLnN0NjV7ZmlsbDojRkZFNUI4O30KCS5zdDY2e2ZpbGw6I0REQzVBMjt9Cgkuc3Q2N3tmaWxsOiNGRkU4QkI7fQoJLnN0Njh7ZmlsbDojRTJBQzQwO30KCS5zdDY5e2ZpbGw6I0I4RDNEMTt9Cgkuc3Q3MHtmaWxsOm5vbmU7fQoJLnN0NzF7ZmlsbDojQ0M0MDYyO30KCS5zdDcye2ZpbGw6I0ZGQzBEMjt9Cgkuc3Q3M3tmaWxsOiNGRjkyQUM7fQoJLnN0NzR7ZmlsbDojREQ0QTZEO30KCS5zdDc1e2ZpbGw6I0RENDU2QTt9Cgkuc3Q3NntmaWxsOiNFOEY5Rjk7fQoJLnN0Nzd7ZmlsbDojRkY4NUEyO30KCS5zdDc4e2ZpbGw6I0QwRDhEODt9Cgkuc3Q3OXtmaWxsOiNGRjhGQUE7fQoJLnN0ODB7ZmlsbDojREI0MjY3O30KPC9zdHlsZT48Zz48cGF0aCBjbGFzcz0ic3QxMiIgZD0iTTMyLDRjLTguODQwMDI2OSwwLTE2LDcuMTY5MDY3NC0xNiwxNi4wMjAzMjI4YzAsNy41OTk2NjY2LDExLjc5OTk4NzgsMjguNzM2NDYzNSwxNS4xMzAwMDQ5LDM0LjU0MzgxNTYgICBjMC4zODk5NTM2LDAuNjcwODM3NCwxLjM0OTk3NTYsMC42NzA4Mzc0LDEuNzI5OTgwNSwwQzM2LjE5MDAwMjQsNDguNzU2Nzg2Myw0OCwyNy42MTk5ODk0LDQ4LDIwLjAyMDMyMjggICBDNDgsMTEuMTY5MDY3NCw0MC44Mjk5NTYxLDQsMzIsNHogTTQxLjYxOTk5NTEsMTkuNTM5NzMyYy0wLjU0MDAzOTEsMS43NjIyNDUyLTEuNzUsMy4yNDQxMDYzLTMuMjk5OTg3OCw0LjIzNTM1MzVMMzIsMjcuODUwMjYxNyAgIGwtNi4zMzAwMTcxLTQuMDc1MTc2MmMtMS41NDk5ODc4LTAuOTkxMjQ3Mi0yLjc2MDAwOTgtMi40NzMxMDgzLTMuMjg5OTc4LTQuMjM1MzUzNSAgIGMtMC41NDAwMzkxLTEuNzkyMzEyNi0wLjY2MDAzNDItNC4zMTU0NzE2LDEuNTU5OTk3Ni01Ljg5NzQ5NTNDMjguMzgwMDA0OSwxMC40OTgyMzM4LDMyLDEzLjg5MjU1NDMsMzIsMTMuODkyNTU0MyAgIHMzLjYwOTk4NTQtMy4zOTQzMjA1LDguMDU5OTk3Ni0wLjI1MDMxNzZDNDIuMjc5OTY4MywxNS4yMjQyNjAzLDQyLjE1OTk3MzEsMTcuNzQ3NDE5NCw0MS42MTk5OTUxLDE5LjUzOTczMnoiLz48Zz48cGF0aCBjbGFzcz0ic3QxMyIgZD0iTTMxLjk5NjAzMjcsNjBjLTcuMjcxNDg0NCwwLTE1LTIuMTA1MjA5NC0xNS02LjAwNzYyMTggICAgYzAtMi4xODkzMDA1LDIuMzk5OTAyMy0zLjk5MzM0NzIsNi43NTc4MTI1LTUuMDgwNjYxOGMwLjUzMjcxNDgtMC4xMjkwNzAzLDEuMDc4MTI1LDAuMTkyNjI3LDEuMjExOTE0MSwwLjczMDQxOTIgICAgYzAuMTMzNzg5MSwwLjUzNTgzNTMtMC4xOTIzODI4LDEuMDc5NDk0NS0wLjcyODUxNTYsMS4yMTM0NTE0Yy0zLjYyMDYwNTUsMC45MDI1MTE2LTUuMjQxMjEwOSwyLjIyNTQ3OTEtNS4yNDEyMTA5LDMuMTM2NzkxMiAgICBjMCwxLjYzMjkzMDgsNS4wNjQ0NTMxLDQuMDA1MDgxMiwxMyw0LjAwNTA4MTJzMTMtMi4zNzIxNTA0LDEzLTQuMDA1MDgxMmMwLTAuOTExMzEyMS0xLjYyMDYwNTUtMi4yMzQyNzk2LTUuMjQwNzIyNy0zLjEzNjc5MTIgICAgYy0wLjUzNjEzMjgtMC4xMzM5NTY5LTAuODYyMzA0Ny0wLjY3NzYxNjEtMC43Mjg1MTU2LTEuMjE0NDMxOGMwLjEzMzMwMDgtMC41MzY4MTE4LDAuNjc3MjQ2MS0wLjg1OTQ4OTQsMS4yMTE5MTQxLTAuNzI5NDM4OCAgICBjNC4zNTc0MjE5LDEuMDg3MzE0Niw2Ljc1NzMyNDIsMi44OTEzNjEyLDYuNzU3MzI0Miw1LjA4MDY2MThDNDYuOTk2MDMyNyw1Ny44OTQ3OTA2LDM5LjI2NzUxNzEsNjAsMzEuOTk2MDMyNyw2MHoiLz48L2c+PC9nPjwvc3ZnPg==",
  iconSize: [48, 48],
  iconAnchor: [24, 48],
  popupAnchor: [0, -48]
});

var pIcon = L.icon({
  iconUrl: parkingIcon,
  iconSize: [48, 48],
  iconAnchor: [24, 48],
  popupAnchor: [0, -48]
});

var uIcon = L.icon({
  iconUrl: userIcon,
  iconSize: [36, 36],
  iconAnchor: [0, 0],
  popupAnchor: [0, 0]
});

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
    // this.handleClick = this.handleClick.bind(this);
  }

  toGoogleMaps(locationData, e) {
    if (locationData.geometry == null) {
      window.open(
        "https://www.google.com/maps/dir/?api=1&destination=" +
          locationData[0] +
          "," +
          locationData[1]
      );
    } else {
      window.open(
        "https://www.google.com/maps/dir/?api=1&destination=" +
          locationData.geometry.coordinates[0][0][0] +
          "," +
          locationData.geometry.coordinates[0][0][1]
      );
    }
  }

  handleClick(event) {
    console.log(this);
  }

  render() {
    const pLoc01 = [35.78581, -78.778632]; // Methodist Church Lot Entrance Walker
    const pLoc01b = [35.786575, -78.779638]; // Methoist Church Lot Entrance Waldo
    const pLoc02 = [35.781771, -78.782612]; // Cary Arts Center Lot Entrance

    if (!this.props.polygonData) {
      return <div>Loading...</div>;
    }

    return (
      // build a Map
      <Context.Consumer>
        {context => (
          <LeafletMap
            className="map"
            onClick={context.moveMap}
            animate={this.state.animate}
            maxBounds={this.state.bounds}
            center={context.state.location}
            minZoom={this.state.minZoom}
            zoom={context.state.zoom}
          >
            <TileLayer // attribution is required for OSM
              attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
              onClick={this.handleClick} // Cary Art Center entrance location
              position={pLoc02}
              icon={pIcon}
            >
              <Popup>
                <center>Entrance: Cary Art Center</center>
                <Button>
                  <directions onClick={this.toGoogleMaps.bind(this, pLoc02)}>
                    Directions
                  </directions>
                </Button>
              </Popup>
            </Marker>
            <Marker // Methodist Church entrance off Walker
              position={pLoc01}
              icon={pIcon}
            >
              <Popup>
                <center>Entrance: Methodist Church Lot, Walker Street</center>
                <Button>
                  <directions onClick={this.toGoogleMaps.bind(this, pLoc01)}>
                    Directions
                  </directions>
                </Button>
              </Popup>
            </Marker>
            <Marker
              onClick={this.handleClick} // Methodist Church entrance off Waldo - one-way street
              position={pLoc01b}
              icon={pIcon}
            >
              <Popup>
                <center>Entrance: Methodist Church Lot, Waldo Street</center>
                <Button>
                  <directions onClick={this.toGoogleMaps.bind(this, pLoc01b)}>
                    Directions
                  </directions>
                </Button>
              </Popup>
            </Marker>
            {this.props.polygonData.map(polygonData => (
              <Polygon
                onClick={context.clickPolygon}
                positions={polygonData.geometry.coordinates[0]}
                color="red"
                name={polygonData.properties.name}
                key={polygonData.geometry.coordinates[0]}
              >
                <Popup>
                  <center>
                    <h3>{polygonData.properties.name}</h3>
                    <Button>
                      <directions
                        onClick={this.toGoogleMaps.bind(this, polygonData)}
                      >
                        Directions
                      </directions>
                    </Button>
                  </center>
                </Popup>
              </Polygon>
            ))}
          </LeafletMap>
        )}
      </Context.Consumer>
    );
  }
}

export default Map;
