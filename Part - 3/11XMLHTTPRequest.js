const url = "https://jsonplaceholder.typicode.com/posts";

const xhr = new XMLHttpRequest();

// step1
xhr.open("GET", url);

// xhr.onreadystatechange = function(){
//     // console.log(xhr.readyState)
//     if(xhr.readyState === 4){
//        const response = xhr.response
//        const data = JSON.parse(response)
//        console.log(data)
//     }
// }

// on load run only when readyState become 4
xhr.onload = function(){
    const response = xhr.response;
    const data = JSON.parse(response)
    console.log(data)
}

xhr.send()
