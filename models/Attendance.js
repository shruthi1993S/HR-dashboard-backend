const mongoose=require("mongoose")

const AttendanceSchema= new mongoose.Schema({
    employeeId:{type:String,required:true},
    date:{type:String,required:true},
    status:{type:String,enum:["present","absent"]},
    remarks:{type:String,required:true}
},{
    timestamps:true
})

module.exports=mongoose.model("Attendance",AttendanceSchema)