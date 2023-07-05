const url = "https://jsonplaceholder.typicode.com/posts/";

const xhr = new XMLHttpRequest();

xhr.open("GET", url)
xhr.onload = ()=>{
    if(xhr.status >= 200 && xhr.status < 300){
        const data = JSON.parse(xhr.response);
        console.log(data);
    }
    else{
        console.log("Some thing Wrong")
    }
   
}
xhr.onerror =  ()=>{
    console.log("Network Failure")
}
xhr.send()