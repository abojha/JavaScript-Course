// static vs live list

// querySelectorAll is static list
// const listItems = document.querySelectorAll(".todo-list li");

const ul = document.querySelector(".todo-list");
// getElementsBySomething is live list
const listItems = ul.getElementsByTagName("li");


const sixthLi = document.createElement("li");
sixthLi.textContent = "item 6";

ul.append(sixthLi)

console.log(listItems)