class TodoItem {
    constructor(text) {
        this.text = text;
        this.done = false;
        this.createdAt = new Date().getTime();
        this.finishTime = null;
        this.element = document.createElement("li");
        this.render();
        this.events();
    }

    setAttributes(data) {
        this.text = data.text;
        this.done = data.done;
        this.createdAt = data.createdAt;
        this.finishTime = data.finishTime;
        this.render();
    }

    render() {
        let input = ''
        if (this.done) {
            input = `<input type="checkbox" class="todo-items__done" checked>${this.text}`;
            this.element.classList.add("todo-items__done");
        } else {
            input = `<input type="checkbox">${this.text}`;
            this.element.classList.remove("todo-items__done");
        }
        this.element.innerHTML = input;
    }

    finishTask() {
        this.done = true;
        this.finishTime = new Date().getTime();
        this.render();
        this.saveToLocalStorage();
    }

    unfinishTask() {
        this.done = false;
        this.render();
        this.saveToLocalStorage();
    }

    events() {
        this.element.addEventListener('click', (e) => {
            if (e.target.nodeName === 'INPUT') {
                if (this.done) {
                    this.unfinishTask();
                } else {
                    this.finishTask();
                }
            }
        });
    }

    saveToLocalStorage() {
        let params = {
            text: this.text,
            done: this.done,
            createdAt: this.createdAt,
            finishTime: this.finishTime
        }
        localStorage.setItem(params.createdAt, JSON.stringify(params));
    }
}

export default TodoItem;