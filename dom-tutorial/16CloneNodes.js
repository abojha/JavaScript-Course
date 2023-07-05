// Clone Nodes

const ul = document.querySelector(".todo-list");

const li = document.createElement("li");

li.textContent = "new Todo"

// clone li
// const li2 = li.cloneNode() // not deep cloning
const li2 = li.cloneNode(true) //deep cloning

ul.append(li);
ul.prepend(li2)