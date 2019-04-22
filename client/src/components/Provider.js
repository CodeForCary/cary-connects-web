import React, { Component } from "react";
import flip from "geojson-flip";
import filterLocation from "./Home/NavigationMenu/filterLocation";

export const Context = React.createContext();

const businessData = null;

class Provider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataType: null,
      selectedItem: null,
      businessData: null,
      parkingData: null,
      location: {
        lat: 35.787317,
        lng: -78.781226
      },
      zoom: 15,
      filteredLocation: filterLocation("", 0),
      handleSearchChange: null,
      searchValue: "",
      drawerOpen: false,
      searchResultsAnchorEl: null,
      markers: [[1, 1]]
    };
  }

  componentDidMount() {
    return new Promise((resolve, reject) => {
      fetch(
        "https://raw.githubusercontent.com/CodeForCary/cary-connects-data/master/business.geojson"
      )
        .then(response => response.json())
        .then(rawJSON => rawJSON.features)
        .then(data => resolve(this.setState({ businessData: data })))
        .catch(err => reject(err));
      fetch(
        "https://raw.githubusercontent.com/CodeForCary/cary-connects-data/master/parking.geojson"
      )
        .then(response => response.json())
        .then(rawJSON => flip.flip(rawJSON.features))
        .then(data => resolve(this.setState({ parkingData: data })))
        .catch(err => reject(err));
    });
  }
  createBusinessMarker = (lat, lng) => {
    const { markers } = this.state;
    markers.pop();
    markers.push([lat, lng]);
    this.setState({ markers });
  };

  pushEntrance = (entrance) => {
    const { markers } = this.state;
    if(entrance != null && entrance.length > 0){
      let entranceLoc = entrance.split(",");
      markers.push([Number(entranceLoc[1].trim()), Number(entranceLoc[0].trim())]);
    }
  }

  render() {
    return (
      <Context.Provider
        value={{
          state: this.state,
          clickPolygon: event => {
            const name = event.target.options.name;
            const parkingData = this.state.parkingData.filter(
              selectedPolygon => selectedPolygon.properties.name === name
            );
            this.setState({
              selectedItem: parkingData,
              drawerOpen: true,
              dataType: "parking"
            });
          },
          getBusinessData: () => {
            return businessData;
          },
          moveMap: location => {
            this.setState({
              location: {
                lat: location.latlng.lat,
                lng: location.latlng.lng
              },
              zoom: location.zoom
            });
          },
          chooseBusiness: name => {
            let feature = this.state.businessData.find(
              feature => feature.properties.name === name.properties.name
            );

            this.setState({
              location: {
                lat: feature.geometry.coordinates[1],
                lng: feature.geometry.coordinates[0]
              },
              zoom: 17.33,
              filteredLocation: filterLocation("", 0),
              searchValue: name.properties.name,
              searchResultsAnchorEl: null,
              selectedItem: feature,
              drawerOpen: true,
              dataType: "business"
            });
            this.createBusinessMarker(
              feature.geometry.coordinates[1],
              feature.geometry.coordinates[0]
            );
          },
          handleSearchChange: event => {
            if (event.target.value === 0) {
              this.setState({
                filteredLocation: filterLocation(event.target.value, 0),
                searchValue: event.target.value,
                searchResultsAnchorEl: event.currentTarget
              });
            } else {
              this.setState({
                filteredLocation: filterLocation(event.target.value, 7, this.state.businessData),
                searchValue: event.target.value,
                searchResultsAnchorEl: event.currentTarget
              });
            }
          },
          createLotMarkerAtEntrance: e => {
            const { markers } = this.state;
            markers.splice(0, markers.length);

            this.pushEntrance(e.properties.entrance1);
            this.pushEntrance(e.properties.entrance2);

            this.setState({ markers });
          },
          clearResultsAndCloseDrawer: event => {
            this.setState({
              filteredLocation: filterLocation("", 0)
            });
            if (
              event.target.className ===
              "MuiGrid-container-124 MuiGrid-align-items-xs-center-132 MuiGrid-justify-xs-center-141 MapComponent-content-122 MapComponent-contentShift-123"
            ) {
              this.setState({ drawerOpen: false });
              console.log("test");
            }
          },
          clearSearch: event => {
            this.setState({
              searchValue: "",
              searchResultsAnchorEl: null,
              markers: [[1, 1]]
            });
          },
          handleDrawerClose: event => {
            this.setState({ 
              drawerOpen: false,
              markers: [[1, 1]] });
          },
          handleSearchResultsOpen: event => {
            this.setState({ searchResultsAnchorEl: event.target });
          }
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Provider;
