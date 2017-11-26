class TodoList {
    constructor(element) {
        this.todolist = [];
        this.todolistView = element;
    }

    add(todo) {
        this.todolist.unshift(todo);
        this.render();
    }

    render() {
        this.todolist.forEach(item => {
            this.todolistView.append(item.element);
        })
    }
}

export default TodoList;