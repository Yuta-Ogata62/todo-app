const todoTitleInput = document.querySelector("#todoTitle");
const todoButtonElement = document.querySelector("#addTodoButton");
const addedTodoElement = document.querySelector("#addedTodo");
const todoListElement = document.querySelector("#todoItems");

let todoItems = [];
let eraseItems = [];

function clickFunction(){

    todoItems.push(todoTitleInput.value);

    todoListElement.innerHTML = ""//reset

    for (i = 0; i < todoItems.length; i++) {
        let  item = document.createElement('li');
        //let  erase = document.createElement('li');
        const todoTitle = todoItems[i]
        //const erasebubtton = todoItems[i]
        item.innerHTML = todoTitle;
        //erase.innerHTML = erasebubtton;
    todoListElement.appendChild(item);

    function clearTextBoxes() {
        const inputs = document.todoTitleInput();
        const clearInputs = ""
            }

};

};
todoButtonElement.addEventListener("click",clickFunction);

//derit
//fix