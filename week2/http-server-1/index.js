//create a simple HTTP server

//library exist in node package registry
//gotta un the command npm install express to install the express library in the projec
const express = require('express');
//library to parse the body of the HTTP request
const bodyParser = require('body-parser');



//create an instance of the express library
//this instance will be used to configure the server
// The app is a object that has a bunch of methods that we can use to configure the server
const app = express();

//define the port that the server will listen to
const port = 3000;

//configure the server to parse the body of the HTTP request
app.use(bodyParser.json());

app.get('/route-handler', function(req, res) {
    //headers,body, status code, etc
    //do machine learning model
    res.json({
        name:"vyom",
    age: 21
})
}  
);

//define a route that will be used to handle the request
app.get('/', function(req, res) {
    //res.send('Hello World!');
    res.send('<b> Hello World! <b>');
    }
);

//start the server
//the server will listen to the port defined above
app.listen(port, function() {
    console.log(`Example app listening at http://localhost:${port}`);
    }
);


