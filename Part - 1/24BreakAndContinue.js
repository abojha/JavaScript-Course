// Break Keyword
console.log("Break Keyword Example");
for(let i = 0; i <= 10; i++){
    if(i == 5){
        
        break;
    }
    console.log(i);
}
console.log(`I break the for loop`);



// Continue Keyword
console.log("Continue Keyword Example");
for (let i = 0; i <= 10; i++) {
  if (i == 5) {
    console.log(`I skip this iteration and continue the for loop - ${i}`);
    continue;
  }
  console.log(i);
}
