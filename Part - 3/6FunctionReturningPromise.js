// Function Returning Promises

function ricePromise(){
    const bucket = ["coffee", "chips", "vegetables", "rice", "salt"];

    return new Promise((resolve, reject) => {
      if (
        bucket.includes("vegetables") &&
        bucket.includes("salt") &&
        bucket.includes("rice")
      ) {
        resolve("Fried Rice");
      } else {
        reject("Couldn't Do It");
      }
    });
}

ricePromise()
  .then(
    // When Promise Resolved
    (myFriedRice) => {
      console.log("Let's eat", myFriedRice);
    }
  )
  .catch((error) => {
    console.log(error);
  });