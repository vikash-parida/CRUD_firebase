const db = require("../../config/db");

exports.addStudentData = async (req, res) => {
  try {
    let data = req.body;
    let result = db.collection("student").add(data);
  return  res.status(200).json({ result });
  } catch (err) {
   return res.status(404).send("user data not added");
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
