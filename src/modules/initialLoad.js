import grabber from './grabber.js';
import ListItem from './listItem.js';
import reload from './ui.js';

const lItem = new ListItem();

const initialLoad = () => {
  grabber('list-contents').innerHTML = '';
  const todoList = JSON.parse(localStorage.getItem('todoList')) || [];
  const container = document.createElement('ul');
  container.classList = 'ps-3 pe-3';
  todoList.forEach((item, index) => {
    lItem.setPosition(index);
    const element = document.createElement('li');
    element.classList = 'd-flex w-100 justify-content-between border-bottom pb-1 pt-1';
    const fHolder = document.createElement('div');
    const sHolder = document.createElement('div');
    fHolder.classList = 'd-flex justify-content-start gap-3';
    sHolder.classList = 'd-flex justify-content-end';
    const btn = document.createElement('input');
    btn.classList = 'check align-self-center';
    const btn2 = document.createElement('button');
    btn2.classList = 'border-0 bg-white el';
    const btn3 = document.createElement('button');
    btn3.classList = 'border-0 bg-white el';
    btn3.innerHTML = `<i class='fas fa-check-double'></i>`;
    const des = document.createElement('p');
    des.contentEditable = 'true';
    des.classList = 'align-middle m-0 text-wrap';
    btn.type = 'checkbox';
    btn.addEventListener('change', (e) => {
      if (e.target.checked) {
        lItem.setStatus(index, 'checked');
        des.innerHTML = item.description.strike();
        des.classList = 'text-muted align-middle m-0';
      } else {
        lItem.setStatus(index, 'not checked');
        des.innerText = item.description;
        des.classList = 'align-middle m-0';
      }
    });
    des.addEventListener('click', () => {
      fHolder.appendChild(btn3);
      btn3.addEventListener('click', () => {
        lItem.setDescription(index, des.innerText);
        console.log(des.innerText);
        fHolder.removeChild(btn3);
      });
    });

    btn2.innerHTML = `<i class='fas fa-trash-alt'></i>`;
    btn2.addEventListener('click', () => {
      lItem.deleteItem(index);
      reload();
    });

    if (item.status === 'checked') {
      btn.checked = true;
      des.innerHTML = item.description.strike();
      des.classList = 'text-muted align-middle m-0';
    } else {
      btn.checked = false;
      des.innerText = item.description;
    }

    fHolder.appendChild(btn);
    fHolder.appendChild(des);
    element.appendChild(fHolder);
    sHolder.appendChild(btn2);
    element.appendChild(sHolder);
    container.appendChild(element);
  });
  return container;
};
export default initialLoad;
