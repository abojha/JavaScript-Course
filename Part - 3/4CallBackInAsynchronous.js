// Callbacks, callback hell, pyramid of doom
// asynchronous programming

const heading1 = document.querySelector(".heading1")
const heading2 = document.querySelector(".heading2")
const heading3 = document.querySelector(".heading3")
const heading4 = document.querySelector(".heading4")
const heading5 = document.querySelector(".heading5")
const heading6 = document.querySelector(".heading6")
const heading7 = document.querySelector(".heading7")

// callback hell
// setTimeout(() => {
//     heading1.textContent = "one"
//     heading1.style.color = "violet"

//     setTimeout(()=>{
//         heading2.textContent = "two";
//         heading2.style.color = "purple";

//         setTimeout(() => {
//           heading3.textContent = "three";
//           heading3.style.color = "blue";

//           setTimeout(() => {
//             heading4.textContent = "four";
//             heading4.style.color = "orange";

//             setTimeout(() => {
//               heading5.textContent = "five";
//               heading5.style.color = "green";

//             }, 5000);

//           }, 1000);

//         }, 3000);

//     }, 2000)

// }, 1000);

// Same work with help of function
function changeText(element, text, color, time, onSuccessCallback, onFailureCallback){
    setTimeout(() => {
        if (element){
            element.textContent = text;
            element.style.color = color;

            if(onSuccessCallback){
                onSuccessCallback()
            }
        }
        else{
            if(onFailureCallback){
                onFailureCallback()
            }
        }
    }, time);
}

// Pyramid of doom
changeText(heading1,"one","green",1000,()=>{
    changeText(heading2,"two","blue",3000,()=>{
        changeText(heading3,"three","pink",2000,()=>{
            changeText(heading4,"four","violet",5000,()=>{
                changeText(heading5,"five","orange",1000,()=>{
                    changeText(heading6,"six","red",3000,()=>{
                        changeText(heading7,"seven","brown",1000,()=>{

                        }, ()=>{console.log("Heading 7 not exist")})
                    }, ()=>{console.log("Heading 6 not exist")})
                }, ()=>{console.log("Heading 5 not exist")})
            }, ()=>{console.log("Heading 4 not exist")})
        }, ()=>{console.log("Heading 3 not exist")})
    }, ()=>{console.log("Heading 2 not exist")})
}, ()=>{console.log("Heading 1 not exist")})