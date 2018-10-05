import geoJSON from "./geoJSON.json";

export default function filterLocation(searchText, maxResults) {

  return geoJSON
    .filter(location => {
      if ((location.name.toLowerCase().includes(searchText.toLowerCase()) || location.amenity.toLowerCase().includes(searchText.toLowerCase()))) {
        return true;
      }
      if (location.name.includes(searchText)) {
        return true;
      }
      return false;
    })
    .slice(0, maxResults);

}
