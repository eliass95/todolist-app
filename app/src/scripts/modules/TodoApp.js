class TodoApp {
  constructor() {
    this.itens;
    this.addEvents();
  }

  addEvents() {
    this.itens = document.querySelectorAll('.todo-items li');

    for (var i = 0; i < this.itens.length; i++) {
      this.itens[i].children[0].addEventListener('click', this.checkItem);
    }
  }

  checkItem(e) {
    if (e.target.checked) {
      console.log('selecionado');
      e.target.parentNode.classList.add("todo-items__done");
    } else {
      e.target.parentNode.classList.remove("todo-items__done");
      console.log('deselecionado!');
    }
  };
}

export default TodoApp;