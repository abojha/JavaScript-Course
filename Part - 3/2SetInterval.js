// console.log("Script Start")

// // Run the function after every T time
// setInterval(()=>{
//     console.log(Math.random())
// }, 500)

// console.log("Script End")

const body = document.body;
const button = document.querySelector(".btn")

const id = setInterval(()=>{
    const red = Math.floor(Math.random() * 126)
    const green = Math.floor(Math.random() * 126);
    const blue = Math.floor(Math.random() * 126);
    const rgb = `rgb(${red}, ${green}, ${blue})`
    body.style.backgroundColor = rgb;
}, 1000)

button.addEventListener("click", (e)=>{
    clearInterval(id)
})