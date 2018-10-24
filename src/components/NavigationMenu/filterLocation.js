export default function filterLocation(searchText, maxResults, data) {
  if (data == null) {
    return []
  } else {
  return data
    .filter(location => {
      if ((location.properties.name.toLowerCase().includes(searchText.toLowerCase()))) {
        return true;
      }
      if (location.properties.name.includes(searchText)) {
        return true;
      }
      return false;
    })
    .slice(0, maxResults);
  }
}
