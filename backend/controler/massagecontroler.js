const massageModel = require("../model/massage")



const newmassage = async (req,res) => {
    const requestmassage = req.body;

    const newMassage = new massageModel(requestmassage);


    try{
        await newMassage.save();
        res.status(201).json(newMassage);
    }catch(err){
        res.status(409).json({massage: err.massage});
    }
}


module.exports = {newmassage}