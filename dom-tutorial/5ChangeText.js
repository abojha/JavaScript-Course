// Change Text

const mainHeading = document.getElementById("Main-heading")

// give content inside
console.log(mainHeading.textContent)

// change the content
mainHeading.textContent = "This is Some thing else";

console.log(mainHeading.textContent)

// innerText vs textContent
// innerText shows only content which is visible on screen.
// textContent shows the whole content whether visible or not.