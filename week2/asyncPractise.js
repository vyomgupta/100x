const fs = require('fs');


//callback practise
function sum(a,b){
    return a+b;
}

const multiply = function(a,b){
    console.log("multiplication")
    return a *b;
}


function operation(a,b,cb){
    const value = cb(a,b);
    return value + 2;

}

const calculate = operation(2,4,multiply);

const calculate2 = operation(4,5,cb = (a,b) => {
    console.log("worked");
    return a*b;
})


console.log(calculate);
console.log(calculate2)


//async functions

setTimeout(multiply,2000);



const testcb  =(errorr,dataa) => {
    console.log(dataa);
}

fs.readFile('h1.txt','utf8',(err,data) => {
    console.log(data);
}
)

fs.readFile('h1.txt','utf8',testcb);
console.log("down here")


//promise practise

function readfilePromise(){
    return new Promise((resolve,reject) => {
        fs.readFile('h1.txt','utf8',(err,data) => {
            if(err){
                reject(err);
            }
            resolve(data);
        }
        )
    }
    )
}

const promise = new Promise((resolve,reject) => {    
    fs.readFile('h1.txt','utf8',(err,data) => {
        if(err){
            reject(err);
        }
        resolve(data);
    }
    )
}

)

promise.then((data) => {
    console.log(data);
}
).catch((err) => { 
    console.log(err);
}
)
console.log("bottom of the ocean");


//async await practise

async function readfile(){
    const data  = await readfilePromise();
    readfilePromise().then((data) => {
        console.log(data+"promise worked");
    });

    console.log(data+"await worked");
}

readfile();
console.log("bottom of the ocean");