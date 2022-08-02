const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/students-api")
.then(() => { 
    console.log("connection is sucessful");   
}).catch((err) => {
    console.log("no connection");
})