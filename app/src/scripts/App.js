import TodoApp from './modules/TodoApp';

var todo = new TodoApp();
var btnAddItem = document.querySelector('#add-item-btn');
var textAddItem = document.querySelector('#add-item-text');
var itens = document.querySelector('.todo-items');

btnAddItem.addEventListener('click', addNewItem);

document.onkeydown=function(){
  if(window.event.keyCode=='13'){
      btnAddItem.focus();
  }
}

function addNewItem() {
  console.log(textAddItem.value);
  
  if (textAddItem != '') {
    var newItem = `<li><input type="checkbox">${textAddItem.value}</li>`   
    itens.innerHTML += newItem;
    textAddItem.value = "";
    todo.addEvents();
  }
};
