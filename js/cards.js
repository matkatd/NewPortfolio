import DataService from "./DataService.js";
const myDataService = new DataService();
const url = "../json/wdd.json";

const content = await myDataService.getContent(url);
