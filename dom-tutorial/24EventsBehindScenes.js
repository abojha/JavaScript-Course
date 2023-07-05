// Event Behind Scenes

console.log("Script Start")
const allButton = document.querySelectorAll(".my-buttons button");

allButton.forEach((button)=>{
    button.addEventListener("click", (e)=>{
        console.log(e.currentTarget.textContent)
    })
})

console.log("Script End");0
