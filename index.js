const todoTitleInput = document.querySelector("#todoTitle");
const todoButtonElement = document.querySelector("#addTodoButton");
const todoListElement = document.querySelector("#todoItems");

let todoItems = [];
let eraseItems = [];

function clickFunction() {

    const todoItem = {
        title: todoTitleInput.value,
        id: crypto.randomUUID(),
    }
    todoItems.push(todoItem);

    todoListElement.innerHTML = ""//reset

    renderFunction();

};
todoButtonElement.addEventListener("click", clickFunction);

// [{id: "fdd"} , {id: "dsfvd"}] O
// ["vdfv", "csdvd"] X

function getListItemIndexById(listItems, id) {

    let targetItemIndex = -1;
    
    for (let index = 0; index < listItems.length; index++) {
        const item = listItems[index];

        if(item.id === id) {
            targetItemIndex = index;
            return;
        } 
    }

    return targetItemIndex;
}
 function renderFunction(){
    for (i = 0; i < todoItems.length; i++) {
    let item = document.createElement('li');
    const todoItem = todoItems[i];
    item.innerHTML = todoItem.title;

    item.addEventListener("click", () => {
        const targetIndex = getListItemIndexById(todoItems, todoItem.id)
        todoItems.splice(targetIndex, 1);
        todoListElement.innerHTML = "";
        renderFunction();
    })


    todoListElement.appendChild(item);
 }
 }
//fix

