// Example 4 - Closure

function myFunc(){
    let counter = 0

    return function(){
        if(counter < 1){
            console.log("Hi You Called Me");
            counter++;
        }
        else{
            console.log("Mai Call Ho Chuka Hoon");
        }
    }
}

const func = myFunc();
func();
func();