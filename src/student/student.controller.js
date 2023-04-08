const db = require("../../config/db");
const service = require('./student.service');

exports.addStudentData = async (req, res) => {
  let {firstName,lastName,contactNo,address,subject,gender} = req.body;
  let studentData = {firstName,lastName,contactNo,address,subject,gender};
  let result = await service.addStudentData(studentData)
  if(result.success){
    return res.status(200).json({data:result})
  }else{
    return res.status(404).json({data:result})
  }

};

exports.getStudentData = async (req,res) => {
    try{
        const data = await db.collection("student").get();
      return res.status(200).json({data})
    } catch(err){
       return res.status(404).send('student data not found')
    }
};

exports.getStudentDataById = async (req,res) => {
try{ let id = req.params.id
  console.log(id); 
  const result = await db.collection("student").doc(id).get();
  if(!result){
    return res.status(404).send('student data not found')
  }else{
    return res.status(200).json({result})
  }
} catch(err){
 console.log(err);
}
};


exports.updateStudentDataById = async (req,res) => {
    let id = req.params.id
    let data = req.body;
    const result = await db.collection("student").doc(id).update({data}); 
    if(!result){
      return res.status(404).send("student data not found")
    }else{
      return res.status(200).send("student data is updated successfully")
    }
};
