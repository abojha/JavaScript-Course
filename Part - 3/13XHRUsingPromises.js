const url = "https://jsonplaceholder.typicode.com/posts/";


function sendRequest(method, url){
    return new Promise(function(resolve, reject){
        const xhr = new XMLHttpRequest();
        xhr.open(method, url)

        xhr.onload = function(){
            if(xhr.status >= 200 && xhr.status < 300){
                resolve(xhr.response)
            }
            else{
                reject(new Error("Something Went Wrong"))
            }
        }
        xhr.onerror = function(){
             reject(new Error("Something Went Wrong"));
        }
        xhr.send()
    })
}


sendRequest("GET", url)
    .then((response)=>{
        const data = JSON.parse(response)
        // console.log(data)
        return data
    })
    .then(data=>{
        const id = data[3].id
        return id;
    })
    .then(id=>{
        const url2 = `${url}${id}`
        return sendRequest("GET", url2)
    })
    .then(newResponse=>{
        const newData = JSON.parse(newResponse)
        console.log(newData)
    })