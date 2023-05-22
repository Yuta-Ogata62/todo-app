const todoTitleInput = document.querySelector("#todoTitle");
const todoButtonElement = document.querySelector("#addTodoButton");
const todoListElement = document.querySelector("#todoItems");

let todoItems = [];

function clickFunction() {

    const todoItem = {
        title: todoTitleInput.value,
        id: crypto.randomUUID(),
        isCompleted: false,
    }

    todoTitleInput.value = ""

    todoItems.push(todoItem);

    reset();

    renderFunction();

};
todoButtonElement.addEventListener("click", clickFunction);


function getListItemIndexById(listItems, id) {

    let targetItemIndex = -1;
    for (let index = 0; index < listItems.length; index++) {
        const item = listItems[index];
        if(item.id === id) {
            targetItemIndex = index;
        } 
        
    }
    return targetItemIndex;
}
 function renderFunction(){
    for (i = 0; i < todoItems.length; i++) {
    let item = document.createElement('li');
    const todoItem = todoItems[i];
    let itemTitle = document.createElement('p');
    itemTitle.innerHTML = todoItem.title;
    item.appendChild(itemTitle);

    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = "delete";
    deleteButton.addEventListener("click", () => {
        const targetIndex = getListItemIndexById(todoItems, todoItem.id)
        todoItems.splice(targetIndex, 1);
        reset();
        renderFunction();
    })
    item.appendChild(deleteButton);
    let completeButton = document.createElement('button');
    completeButton.innerHTML = "complete";
    completeButton.addEventListener("click", () => {

       
        const targetIndex = getListItemIndexById(todoItems, todoItem.id)
    todoItems[targetIndex].isCompleted = true;
    reset();
    renderFunction();
})
item.appendChild(completeButton);

    if (todoItem.isCompleted){
        item.setAttribute("class","is-completed");//htmlにアトリビュート追加
    }

 



    todoListElement.appendChild(item);
 }
 }

 function reset(){
    todoListElement.innerHTML = "";
 }


//copmleted = false