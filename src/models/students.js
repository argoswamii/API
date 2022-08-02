const mongoose = require("mongoose");
const validator = require("validator");




const studentSchema = new mongoose.Schema({
    name: {
        type : String,
        required : true,
        max:20,
    },

    
        email:{
            type :String,
            required:true,
            unique:true,
            validate(value){
              if(!validator.isEmail(value)){
                  throw new Error(" invalid email")
              }  
            }
        },
        phone:{
            type:Number,
            min:10,
            required:true,
            unique:true
        },
        address:{
            type:String,
            required:true
        }

})

//create collection

const Student = new mongoose.model("Student", studentSchema);

module.exports = Student;