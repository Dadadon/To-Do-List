const todoList = JSON.parse(localStorage.getItem('todoList')) || [];
const form = document.forms['todoForm'];

export default class listItem {
  constructor(description, status, position) {
    this.description = description;
    this.status = status;
    this.position = position;
  }

  deleteItem(index) {
    todoList.splice(index, 1);
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }

  addItem() {
    const descr = form.addTodo;
    const pos = todoList.length;
    const stat = 'not checked';
    const item = new listItem(descr.value, stat, pos);
    todoList.push(item);

    localStorage.setItem('todoList', JSON.stringify(todoList));
    document.forms['todoForm'].reset();
  }

  setStatus(index, stat) {
    todoList[index].status = stat;
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }
}
