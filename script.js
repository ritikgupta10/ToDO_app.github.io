let todoList=[];

function addItem(){
    let inputElement = document.querySelector('#todoItem');
    let myItem=inputElement.value;
    todoList.push(myItem);
    inputElement.value='';
    displayItem();
}
function displayItem(){
    let inputElement = document.querySelector('#Item');
    inputElement.innerText='';
    for(let i=0;i<todoList.length;i++){
        inputElement.innerText=inputElement.innerText +"\n" +(i+1
        )+" "+ todoList[i];
    }
}