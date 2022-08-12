let todoList = JSON.parse(localStorage.getItem('todoList')) || [];
const form = document.forms['todoForm'];

export default class ListItem {
  constructor(description, status, position) {
    this.description = description;
    this.status = status;
    this.position = position;
  }

  addItem() {
    if (form.addTodo.value === '') {
      alert('Please add text');
    } else {
      const descr = form.addTodo;
      const pos = todoList.length;
      const stat = 'not checked';
      const item = new ListItem(descr.value, stat, pos);
      todoList.push(item);

      localStorage.setItem('todoList', JSON.stringify(todoList));
      document.forms['todoForm'].reset();
    }
  }

  setStatus(index, stat) {
    todoList[index].status = stat;
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }

  setDescription(index, descr) {
    todoList[index].description = descr;
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }

  setPosition(index) {
    todoList[index].position = index;
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }

  deleteItem(index) {
    todoList.splice(index, 1);
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }

  filterList() {
    todoList = todoList.filter((item) => {
      if (item.status === 'not checked') {
        return item;
      }
    });
    localStorage.clear();
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }
}
