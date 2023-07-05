// Loops

// array like object ----> indexing, length property
// let navItems = document.getElementsByTagName("a"); // HTML Collections


// simple for loop
// for(let i = 0; i < navItems.length; i++){
//     // console.log(navItems[i])
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }


// for of loop
// for(let navItem of navItems){
//     navItem.style.backgroundColor = "fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }


// forEach // can't use with this loop for HTML Collections
// but we can convert html collection into array and use for each loop
// navItems = Array.from(navItems)

// navItems.forEach((navItem)=>{
//     navItem.style.backgroundColor = "fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// })













// Node-List

// const allNavItemsQALL = document.querySelectorAll(".nav-item"); // NodeList
// console.log(allNavItemsQALL);

// let navItems = document.querySelectorAll("a");

// simple for loop
// for(let i = 0; i < navItems.length; i++){
//     // console.log(NavItemsClassName[i])
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "fff";
//     navItem.style.color = "blue";
//     navItem.style.fontWeight = "bold";
// }


// for of loop
// for(let navItem of navItems){
//     navItem.style.backgroundColor = "fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }


// forEach 
// navItems.forEach((navItem)=>{
//     navItem.style.backgroundColor = "fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// })
