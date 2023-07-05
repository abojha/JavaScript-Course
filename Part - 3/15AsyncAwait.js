// Async Await
// fetch(url)
//     .then(yes=>yes.json())
//     .then(data =>{
//         console.log(data)
//     })

const url = "https://jsonplaceholder.typicode.com/postsv /";

async function getPost(){
   const response = await fetch(url);
   if(!response.ok){
      throw new Error("Something Went Wrong");
   }
   const data = await response.json()
   return data
}

getPost()
   .then(mydata=>{
      console.log(mydata)
})
   .catch(error=>{
      console.log(error)
   })