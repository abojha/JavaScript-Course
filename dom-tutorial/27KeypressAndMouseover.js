// keypress event
// mouseover event

// const body = document.body;

// body.addEventListener("keypress", (e)=>{
//     console.log(e.key)
// })

const mainButton = document.querySelector(".btn-headlines")

mainButton.addEventListener("mouseover", ()=>{
    console.log("Mouse Over");
});

mainButton.addEventListener("mouseleave", ()=>{
    console.log("Mouse Leave");
});