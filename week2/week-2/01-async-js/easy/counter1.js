let counter = 0;

const cid = setInterval(function (){
    counter++;
    console.log(counter);
    if(counter === 10) clearTimeout(cid);
},1000);


console.log(cid);
