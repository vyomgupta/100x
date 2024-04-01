const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log("Headers:", req.headers);
    const id = req.query.id;
    const name = req.headers.name;
    const pass = req.headers.pass;

    console.log("name:", name);
    console.log("password:", pass);
    console.log("id:", id);
    
    if (name === "vyom" && pass === "qwerty") {
        return res.status(200).json({
            msg: "user exists"
        });
    } else {
        return res.status(401).json({
            msg: "Unauthorized"
        });
    }
});


app.listen(2000, () => {
    console.log("Server is running on port 2000");
});
