/** Returns URL search params */
function getParams(param) {
  const queryString = document.location.search;
  const urlParams = new URLSearchParams(queryString);
  const product = urlParams.get(param);
  return product;
}
/** Returns string as title case */
function titleCase(string) {
  return string[0].toUpperCase() + string.substr(1).toLowerCase();
}

function getJsonFilename() {
  let url = "../json/";
  const address = window.location.pathname;
  if (address.search("/wdd") != -1) {
    url += "wdd.json";
  } else if (address.search("/se") != -1) {
    url += "se.json";
  } else if (address.search("/other") != -1) {
    url += "other.json";
  } else if (address.search("/photo") != -1) {
    url += "photo.json";
  }

  return url;
}

export default {
  getParams,
  titleCase,
  getJsonFilename,
};
