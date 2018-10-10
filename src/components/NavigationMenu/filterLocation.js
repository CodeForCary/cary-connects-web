import Data from "./Data.js";
import axios from 'axios';

export default function filterLocation(searchText, maxResults) {
  return new Promise((resolve, reject) => {
    axios.get(`http://codeforcary.org/parking/business.geojson`)
      .then(res => JSON.parse(res.data))
      .then(locations => locations.filter(location => {
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
