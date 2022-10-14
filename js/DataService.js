function convertToJson(response) {
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Bad response!");
  }
}

export default class DataService {
  constructor() {}
  /** Gets content from json file */
  getContent(url) {
    return fetch(url)
      .then(convertToJson)
      .then((data) => {
        // console.log(data);
        return data;
      });
  }

  getSingleCard(content, title) {
    const card = content.find((e) => e.title === title);
    return card;
  }
}
