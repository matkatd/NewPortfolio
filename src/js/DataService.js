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

  /** Returns data attached to object with given slug */
  async getBySlug(data, slug) {
    const content = await this.getContent(data);
    const find = content.find((item) => item.slug === slug);
    return find;
  }
}
