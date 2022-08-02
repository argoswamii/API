const express = require("express");
require("./db/conn");

const Student = require("./models/students");
const StudentRouter = require("./routers/students");
const app = express();
const port = process.env.port || 3000;

app.use(express.json()); 
app.use(StudentRouter);



/*create a new student
app.post("/students",(req,res) => {
  console.log(req.body);
  const user = new Student(req.body);

 user.save().then(() => {
    res.status(201).send(user);
  }).catch((e) => { res.status(400).send(e);
  })

}) */



app.listen(port, () => {
  console.log(`connection is sucessful ${port}`)
});