class TodoApp {
  constructor() {
    this.itens = document.querySelector('.todo-items');
    this.itensArray;
    this.addEvents();
  }

  addEvents() {
    this.itensArray = document.querySelectorAll('.todo-items li');

    for (var i = 0; i < this.itensArray.length; i++) {
      this.itensArray[i].children[0].addEventListener('click', this.checkItem);
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

  addNewItem(textAddItem) {
    if (textAddItem.value != '') {
      var newItem = `<li><input type="checkbox">${textAddItem.value}</li>`   
      this.itens.innerHTML += newItem;
      textAddItem.value = "";
      this.addEvents();
    }
  };
}

export default TodoApp;