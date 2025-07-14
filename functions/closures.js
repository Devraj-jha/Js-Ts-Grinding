function outer(){
    const secret = "123";
    return function inner(){
        console.log(secret);
    };
}

const innerFunction = outer();
inner();