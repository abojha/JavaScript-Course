// Event Object

// const firstButton = document.querySelector("#one");

// firstButton.addEventListener("click", function(event){
//     console.log(this);
//     console.log(event);
// })

// jab bhi me kisi bhi element par event listener add hoga
// browser ---- js Engine + extra feture
// browser ---- js Engine + webAPI

// jab browser ko pata chala ki user ne event perform kia
// jo hum listen kar rhe the
// browser ------- 2
// 1). call back function ko js engine ko dega ....
// 2). callback function ke saath vo jo event hua uski information bhi dega.
// ye info hume object ke form me milegi.

const buttonAll = document.querySelectorAll(".my-buttons button")


for (let button of buttonAll){
    button.addEventListener("click", (e)=>{
        console.log(e.currentTarget)
    })
}