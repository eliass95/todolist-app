class TodoItem {
    constructor(text) {
        this.text = text;
        this.done = false;
        this.createdAt = new Date();
        this.finishTime = null;
        this.element = document.createElement("li");
        this.updateElement();
        this.events();
    }

    updateElement() {
        this.element.innerHTML = `<input type="checkbox">${this.text}`;
    }

    finishTask() {
        this.done = true;
        this.finishTime = new Date();
    }

    unfinishTask() {
        this.done = false;
    }

    events() {
        this.element.addEventListener('click', (e) => {
            if (e.target.nodeName === 'INPUT') {
                if (e.target.checked) {
                    this.finishTask();
                    e.target.parentNode.classList.add("todo-items__done");
                    console.log(this);

                } else {
                    this.unfinishTask();
                    e.target.parentNode.classList.remove("todo-items__done");
                    console.log(this);
                }
            }
        });
    }
}

export default TodoItem;