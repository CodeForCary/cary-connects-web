import geoJSON from "./geoJSON.json";

export default function filterLocation(searchText, maxResults) {

  return geoJSON
    .filter(location => {
      if ((location.properties.name.toLowerCase().includes(searchText.toLowerCase()) || location.properties["marker-symbol"].toLowerCase().includes(searchText.toLowerCase()))) {
        return true;
      }
      if (location.properties.name.includes(searchText)) {
        return true;
      }
      return false;
    })
    .slice(0, maxResults);

}
