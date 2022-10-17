import DataService from "./DataService.js";
import utils from "./utils.js";
const { getJsonFilename } = utils;
const myDataService = new DataService();

// Need function that can figure out which page is loading from the URL string
// This will determine which json file to pull from.

function buildPage(content, url) {
  let html = "";
  console.log(content);
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
     <a href="./project.html?proj=${element.slug}&cat=${url}" class="card-button">See More</a>
  </div>`;
  });

  document.querySelector("#card-grid").innerHTML = html;
}

window.addEventListener("load", async function () {
  const url = getJsonFilename();
  console.log(url);
  const content = await myDataService.getContent(url);
  let file = url.substring(8, url.lastIndexOf("."));
  console.log(content);
  buildPage(content, file);
});
