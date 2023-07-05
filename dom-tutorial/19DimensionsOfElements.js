// How to get the dimensions of elements

const sectionTodo = document.querySelector(".section-todo");
const info  = sectionTodo.getBoundingClientRect();

console.log(info)