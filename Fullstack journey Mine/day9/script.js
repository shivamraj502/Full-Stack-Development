// Wrong
// Day 9: Functions & scope.
// 👉 Task: Function that returns sum, factorial.

let a = 4;
let b = 5;
console.log("a: "+a+" "+"b: "+b)
function sum(a,b){
    console.log(a+b)
}

let value = sum(a,b)

function fact(a){
    let p = 1;
    for(let i=0;i<a;i++){
        p = p*(i+1)
    }console.log(p)
}

let prod = fact(a)