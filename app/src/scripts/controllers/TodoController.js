import TodoList from '../models/TodoList';
import TodoItem from '../models/TodoItem';

class TodoController {
    constructor() {
        this.itemText = document.querySelector('#add-item-text');
        this.formSubmit = document.querySelector('#add-item-form');
        this.todoList = new TodoList(document.querySelector('#todo-list'));
        this.events();
    }

    events() {
        this.formSubmit.addEventListener('submit', (event) => {
            event.preventDefault();
            this.addItem();
        });
    }

    addItem() {
        let item = new TodoItem(this.itemText.value);
        this.todoList.add(item);
        this.itemText.value = '';
        console.log(item);
    }
}

var controller = new TodoController();
console.log(controller.todoList);
