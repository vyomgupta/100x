const fs = require('fs');
const express = require('express');
const app = express();
const port = 3000;

function sum(n) {
    let total = 0; // Use a different variable name
    for (let i = 0; i <= n; i++) {
        total += i;
    }
    return total;
}

app.get('/', (req, res) => {
    const n = parseInt(req.query.n); // Convert query parameter to integer
    if (isNaN(n)) {
        res.status(400).send('Invalid input'); // Handle invalid input
        return;
    }
    res.send(sum(n).toString());
});

console.log(`Server is running on port ${port}`);
app.listen(port);


// const users = [{
//     name:"vyom",
//     age:20,
//     metadata:{
//         email:"ada@gmail.com"
//     }
    
// }]


// const app
// const user = {
//     name:"John",
//     kidneys:[
//         {
//         healthy:"false"
//     },
//     {
//         healthy:"true"
//     }
// ]
// }