import './style.css'


document.querySelector('#app').innerHTML = /*html*/`
  <div>

    <h1>To do List</h1>
    <form id="todo_form">
      <input id="todo_input"/><button type="submit">add</button>
    </form>
    <ul id="todo_list"></ul>
    
  </div>
`
const todoInput = document.querySelector('#todo_input');
const todoForm = document.querySelector('#todo_form');
const todoListUl = document.querySelector('#todo_list');

let todoList = [];

todoForm.addEventListener('submit', (event)=>{
  event.preventDefault();
  todoList.push(todoInput.value);
  renderList(todoList);
  todoInput.value = '';
})

function renderLi(text, list, i) {
  const newLi = document.createElement('li');
  newLi.innerHTML = text;
  const newDoneButton = document.createElement('button');
  newDoneButton.innerHTML = 'Done'
  newDoneButton.addEventListener('click', ()=>{
    const newTodoList = [];
    
    for (let z = 0;z < list.length; z++){
      if (z === i) {
        continue;
      } else {
        newTodoList.push(list[z]);
      }
    }
    todoList = newTodoList;
    renderList(todoList);
  })


  newLi.appendChild(newDoneButton)
  return newLi;
}

function renderList(list) {
  todoListUl.innerHTML = '';
  for(let i = 0; i < list.length; i++){
    const newLi = renderLi(list[i], list, i);
    todoListUl.appendChild(newLi);
  }
}