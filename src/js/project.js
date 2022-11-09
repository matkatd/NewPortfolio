import DataService from "./DataService.js";
import utils from "./utils.js";
const { getParams, clickMenu, getJsonFilename } = utils;
const myDataService = new DataService();

function buildProject(data) {
  const html = document.querySelector(".project-body");
  document.getElementById("projectTitle").innerHTML = data.title;
  document.getElementById("projectImg").src = data.img;
  document.getElementById("projectImg").alt = data.alt;
  data.writeup.forEach((element) => {
    html.innerHTML += element;
  });
  document.title = data.title;
  return html;
}

window.addEventListener("load", async function () {
  const slug = getParams("proj");
  const cat = getParams("cat");
  console.log(slug);
  const url = "../json/" + cat + ".json";

  const selectProject = await myDataService.getBySlug(url, slug);
  buildProject(selectProject);
});
