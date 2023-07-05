// Event Bubbling / Event Propogation
// Event Capturing
// Event delegation

const grandParent = document.querySelector(".grandparent");
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");

// // Event Capturing
// child.addEventListener("click", ()=>{
//     console.log("Capture Child")
// }, true);

// parent.addEventListener("click", ()=>{
//     console.log("Capture Parent");
// }, true);

// grandParent.addEventListener(
//   "click",
//   () => {
//     console.log("Capture GrandParent");
//   },
//   true
// );

// document.body.addEventListener(
//   "click",
//   () => {
//     console.log("Capture Body");
//   },
//   true
// );

// // Event Bubbling / Propogation
// child.addEventListener("click", ()=>{
//     console.log("You Clicked On Child")
// })

// parent.addEventListener("click", ()=>{
//     console.log("You Clicked On Parent")
// })

// grandParent.addEventListener("click", ()=>{
//     console.log("You Clicked On GrandParent")
// })

// document.body.addEventListener("click", ()=>{
//     console.log("You Clicked On Body")
// })

// event delegation
grandParent.addEventListener("click", (e)=>{
    console.log("You clicked something")
    console.log(e.target)
})