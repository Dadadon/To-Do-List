import _, { initial } from 'lodash';
import './style.css';
import ListItem from './modules/listItem.js';
import grabber from './modules/grabber.js';
import reload from './modules/ui';

const lItem = new ListItem();
grabber('submit').addEventListener('click', () => {
  lItem.addItem();
  reload();
});

grabber('clear-container').addEventListener('click', () => {
  lItem.filterList();
  reload();
});
reload();
