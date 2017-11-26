class TodoView {
    constructor(element) {
        this.todolistView = element;
    }

    render(model) {
        console.log(model);
        this.todolistView.innerHTML = '';

        model.items.forEach(item => {
            let element = document.createElement("li");
            element.innerHTML = `<input type="checkbox">${ item.text }`;
            item.setElement(element);
            this.todolistView.append(item.element);
        })
    }
}

export default TodoView;