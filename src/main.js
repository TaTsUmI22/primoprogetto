import "./style.css";

/*
const myDocument = {
  myQuerySelector: function (selector) {
    const element = {
      innerHTML: 'valerio'
    }
    return element
  }
}

console.log(myDocument.myQuerySelector('html').innerHTML)

// accesso agli oggetti con nomeOggetto.nomeProprietà

*/

const app = document.querySelector("#app");

app.innerHTML = /*html*/ `
  <div class="container">
    <header class="menu">
      <h1 class="menu__title">To do List</h1>
      <form id="todo_form" class="menu__form">
        <input class="menu__input" id="todo_input"/><button class="menu__add-button" type="submit">Add</button>
        <p class="menu__error">"Per favore, inserisci un testo!"</p>
      </form>
    </header>
    <main class="todo">
      <ul id="todo_list" class="todo__list"></ul>
    </main>
  </div>
`;
const todoInput = document.querySelector("#todo_input");
const todoForm = document.querySelector("#todo_form");
const todoListUl = document.querySelector("#todo_list");

let todoList = ["todo di base", "ciao"];
renderList(todoList);

function submitEventHandler(event) {
  event.preventDefault();
  if (todoInput.value.trim() !== "") {
    todoList.push(todoInput.value);
    renderList(todoList);
    todoForm.className = "menu__form";
  } else {
    todoForm.className = "menu__form menu__form--error";
  }

  todoInput.value = "";
}

todoForm.addEventListener("submit", submitEventHandler);

function renderLi(text, list, i) {
  const newLi = document.createElement("li");
  newLi.className = "todo__item";
  const newSpan = document.createElement("span");
  newSpan.innerHTML = text;
  newSpan.className = "todo__text";
  const newDoneButton = document.createElement("button");
  newDoneButton.innerHTML = "Done";
  newDoneButton.className = "todo__done-button";
  newDoneButton.addEventListener("click", () => {
    const newTodoList = [];

    for (let z = 0; z < list.length; z++) {
      if (z === i) {
        continue;
      } else {
        newTodoList.push(list[z]);
      }
    }
    todoList = newTodoList;
    renderList(todoList);
  });

  newLi.appendChild(newSpan);
  newLi.appendChild(newDoneButton);
  return newLi;
}

function renderList(list) {
  todoListUl.innerHTML = "";
  for (let i = 0; i < list.length; i++) {
    const newLi = renderLi(list[i], list, i);
    todoListUl.appendChild(newLi);
  }
}
