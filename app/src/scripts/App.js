import TodoApp from './modules/TodoApp';

var todo = new TodoApp();
var btnAddItem = document.querySelector('#add-item-btn');
var textAddItem = document.querySelector('#add-item-text');

btnAddItem.addEventListener('click', function () {
  todo.addNewItem(textAddItem);
});

textAddItem.focus();
document.onkeydown = function () {
  if (window.event.keyCode == '13') {
    btnAddItem.focus();
    window.setTimeout(function(){
      textAddItem.focus();
    }, 50);
  }
}