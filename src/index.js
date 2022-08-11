import _, { initial } from 'lodash';
import './style.css';
import ListItem from './modules/listItem.js';
import grabber from './modules/grabber.js';
import initialLoad from './modules/initialLoad.js';

const lItem = new ListItem();
const todoList = JSON.parse(localStorage.getItem('todoList')) || [];

console.log(todoList);
grabber('submit').addEventListener('click', () => {
  lItem.addItem();
  initialLoad();
});

grabber('list-contents').appendChild(initialLoad());
