//fetch

const url = "https://jsonplaceholder.typicode.com/posts/";

// const whatis = fetch(url)
// console.log(whatis)

// It retrun promise so we can use then with fetch
// fetch(url)
//     .then(response=>{
//         if(response.ok){
//             return response.json()
//         }
//         else{
//             throw new Error("Something Went Wrong")
//         }
//     })
//     .then(data=>{
//         console.log(data)
//     })
//     // fetch always reject when network related issues only so catch will not work
//     .catch(error=>{
//         console.log(error)
//     })


fetch(url, {
    method:'POST',
    body:JSON.stringify({
        title:'foo',
        body:'bar',
        userId:1,
    }),
    headers:{
        'Content-type':'application/json; charset=UTF-8'
    },
    })
    .then(response=>{
        if(response.ok){
            return response.json()
        }
        else{
            throw new Error("Something Went Wrong")
        }
    })
    .then(data=>{
        console.log(data)
    })
    // fetch always reject when network related issues only so catch will not work
    .catch(error=>{
        console.log(error)
    })