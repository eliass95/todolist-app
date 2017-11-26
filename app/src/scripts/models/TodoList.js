import TodoItem from './TodoItem';

class TodoList {
    constructor(element) {
        this.todolist = [];
        this.todolistView = element;
        this.fetchListFromLocalStorage();
        this.render();
    }

    add(todo) {
        todo.saveToLocalStorage();
        this.todolist.unshift(todo);
        this.render();
    }

    render() {
        this.todolist.forEach(item => {
            this.todolistView.append(item.element);
        })
    }

    fetchListFromLocalStorage() {
        let localItems = [];
        if (localStorage.length > 0) {
            for (let key in localStorage) {
                let data = localStorage.getItem(key);
                if (typeof data === 'string') {
                    let item = new TodoItem(data.text);
                    item.setAttributes(JSON.parse(data));
                    localItems.push(item);
                }
            }
        }

        localItems.sort((a, b) => {
            if (a.createdAt < b.createdAt)
                return 1;
            if (a.createdAt > b.createdAt)
                return -1;
            return 0;
        });

        this.todolist = localItems;
    }
}

export default TodoList;