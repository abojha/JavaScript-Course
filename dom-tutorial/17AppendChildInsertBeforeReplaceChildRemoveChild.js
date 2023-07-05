// appendChild
// insertBefore
// replaceChild
// removeChild

const ul = document.querySelector(".todo-list");
const referenceNode = document.querySelector(".first-todo");
const li = document.createElement("li");
li.textContent = "newTodo"

// insertBefore
// ul.insertBefore(li, referenceNode)

// replaceChild
// ul.replaceChild(li, referenceNode)

// removeChild
// ul.removeChild(referenceNode)