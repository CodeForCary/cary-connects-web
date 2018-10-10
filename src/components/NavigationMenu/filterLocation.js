import geoJSON from "./geoJSON.json";
import axios from 'axios';

export default function filterLocation(searchText, maxResults) {
  return new Promise((resolve, reject) => {
    axios.get(`https://cors-anywhere.herokuapp.com/http://codeforcary.org/parking/business.geojson`)
      .then(locations => locations.data.features.filter(location => {
        if ((location.properties.name.toLowerCase().includes(searchText.toLowerCase()) || location.properties["marker-symbol"].toLowerCase().includes(searchText.toLowerCase()))) {
          return true;
        }
        if (location.properties.name.includes(searchText)) {
          return true;
        }
        return false;
      }))
      .then(results => resolve(results.slice(0, maxResults)))
      .catch(err => reject(err));
  });
}
