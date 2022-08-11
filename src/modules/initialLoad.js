import grabber from './grabber.js';
import listItem from './listItem.js';

const lItem = new listItem();

const initialLoad = () => {
  grabber('list-contents').innerHTML = '';
  const todoList = JSON.parse(localStorage.getItem('todoList')) || [];
  const container = document.createElement('ul');
  container.classList = 'ps-3 pe-3';
  todoList.forEach((item, index) => {
    const element = document.createElement('li');
    element.classList =
      'd-flex w-100 justify-content-between border-bottom pb-1 pt-1';
    const fHolder = document.createElement('div');
    const sHolder = document.createElement('div');
    fHolder.classList = 'd-flex justify-content-start gap-3';
    sHolder.classList = 'd-flex justify-content-end';
    const btn = document.createElement('input');
    btn.classList = 'w-25';
    const btn2 = document.createElement('button');
    btn2.classList = 'border-0 bg-white';
    const des = document.createElement('p');
    des.classList = 'w-75 align-middle m-0';

    btn.type = 'checkbox';
    btn.addEventListener('change', (e) => {
      if (e.target.checked) {
        lItem.setStatus(index, 'checked');
        des.innerHTML = item.description.strike();
      } else {
        lItem.setStatus(index, 'not checked');
        des.innerText = item.description;
      }
    });

    btn2.innerHTML = `<i class='fas fa-ellipsis-v'>`;
    btn2.addEventListener('mouseover', () => {
      btn2.innerHTML = '<i class='fas fa-trash-alt'></i>';
    });

    btn2.addEventListener('mouseout', () => {
      btn2.innerHTML = '<i class='fas fa-ellipsis-v'>';
    });

    btn2.addEventListener('click', () => {
      lItem.deleteItem(index);
    });

    if (item.status == 'checked') {
      btn.checked = true;
      des.innerHTML = item.description.strike();
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
