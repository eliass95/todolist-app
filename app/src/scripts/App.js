import TodoApp from './modules/TodoApp';

var todo = new TodoApp();
var btnAddItem = document.querySelector('#add-item-btn');
btnAddItem.addEventListener('click', addNewItem);

function addNewItem() {
  var textAddItem = document.querySelector('#add-item-text');
  var itens = document.querySelector('.todo-items');
  console.log(textAddItem.value);
  
  if (textAddItem != '') {
    var newItem = `<li><input type="checkbox">${textAddItem.value}</li>`   
    itens.innerHTML += newItem;
    textAddItem.value = "";
    todo.addEvents();
  }
};
