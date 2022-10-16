import DataService from "./DataService.js";

const myDataService = new DataService();

// Need function that can figure out which page is loading from the URL string
// This will determine which json file to pull from.

function buildPage(content) {
  let html = "";
  console.log(typeof content);
  content.forEach((element) => {
    html += `
    <div class="card">
      <img
        src="${element.img}"
        alt="${element.alt}"
      />
      <div class="card-text">
        <h3>${element.title}</h3>
        <p>${element.date}</p>
      </div>  
    <a href="./project.html?proj=${element.slug}" class="card-button">See More</a>
  </div>`;
  });

  document.querySelector("#card-grid").innerHTML = html;
}

window.addEventListener("load", async function () {
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
  console.log(url);
  const content = await myDataService.getContent(url);
  console.log(content);
  buildPage(content);
});
