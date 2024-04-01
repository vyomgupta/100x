const d = new Date();

const date = d.getDate();

console.log(date);
const curtime = d.getSeconds();
const curd = d.getTime();

console.log(curtime);;

let counter = 0;



function increment(counter){
    if(counter == 10){
        return;
    }
    setTimeout(() =>{
        console.log(counter);
        counter++;
        increment(counter);
        },1000);

        
}


// while(counter < 10){
//     console.log(counter);
//     setTimeout(() =>{
//         console.log(counter);
//         counter++;
//         },1000);
// }






console.log(counter);

// const start = curtime;
// const end = curtime + 10;
//  let counter = 0;


// while(d.getSeconds != (curtime + 3)%60){
//     console.log(counter);
//     counter++;
// }

