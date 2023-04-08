const db = require("../../config/db");

exports.getStudentData = async ()=>{
    

}

exports.getByIdStudentData = async ()=>{

}

exports.addStudentData = async (studentData)=>{
    let data = db.collection("student").add(studentData);
    if(data){
     return {success:true,result:{id:data.id},message:"student is added successfully"}
    }else{    
     return {success:false,message:"student is not added",result:data}
    }
}

exports.updateStudentData = async ()=>{

}

exports.deleteStudentData = async ()=>{

}

exports.restoreStudentData = async ()=>{

}

