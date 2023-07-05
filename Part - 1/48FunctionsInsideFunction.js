// Functions Inside Function

const app = () => {
    const func = () =>{
        console.log("Hello from My Func")
    }

    const sum = (n1, n2)=>{
        console.log(n1 + n2)
    }

    const mul = (num1, num2) => num1 * num2 
    console.log("Inside App");
    func()
    sum(3, 4)
    console.log(mul(4, 5))
}

app()