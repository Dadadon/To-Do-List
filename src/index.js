import _, { initial } from "lodash";
import "./style.css";
import listItem from "./modules/listItem.js";
import grabber from "./modules/grabber.js";
import initialLoad from "./modules/initialLoad.js";

const lItem = new listItem();
const todoList = JSON.parse(localStorage.getItem("todoList")) || [];
const template = document.createElement("template");

function init() {
  const element = document.createElement("div");
  const btn = document.createElement("button");

  element.innerHTML = _.join(["Hello", "webpack"], " ");

  btn.innerHTML = "Click me and check the console!";

  element.appendChild(btn);
  document.body.appendChild(element);
}

console.log(todoList);
grabber("submit").addEventListener("click", () => {
  lItem.addItem();
  initialLoad();
});


grabber("list-contents").appendChild(initialLoad());
// document.body.appendChild(component());
