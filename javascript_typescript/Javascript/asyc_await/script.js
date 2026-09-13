// why -> it bascially doesn't let the main js thread stop. and freeeze the programme.

console.log("start")

setTimeout(() => {
    console.log("hello")
}, 2000);

console.log("finsihed")

// Promise -> an object that will eventually produce a result.


async function hello(){
    return "hello";
}

const result = hello();
console.log(result)

result.then((result) => {
    console.log(result)
})

async function main(){
    const data = await hello();
    console.log(data)
}

main()


function wait() {
  let i = 2e9;
  while (--i > 0);
}

wait();
console.log("doneee")