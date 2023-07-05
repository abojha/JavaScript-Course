const todoList = document.querySelector(".todo-list");

// console.log(todoList)
console.log(todoList.innerHTML)
// todoList.innerHTML = "<li> New Todo </li>"

// Add new todo
todoList.innerHTML += "<li> New Todo </li>"
todoList.innerHTML += "<li> New Todo1 </li>"

// When you should use it or when not??

//When performance issue so never use it.

// when you need to change whole innerHTML then you should use it.