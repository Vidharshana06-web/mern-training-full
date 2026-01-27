const Task = require('../models/Task');

// CREATE TASK
exports.createTask = async (req, res) => {
  try {
    const task = await Task.create({
      title: req.body.title,
      description: req.body.description,
      status: req.body.status || "pending",
      user: req.user.id || req.user._id,
    });

    res.status(201).json({
      msg: "Task created successfully",
      task,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.readTask = async (req, res) => {
  try {
    const tasks = await Task.find({
       user:req.user.id || req.user._id,
    });

    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.getTaskById = async (req, res) => {
  try {
    const task = await Task.findOne({
      _id: req.params.id,
      user: req.user.id, 
    });
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.updateTask = async (req, res) => {

    try {
        const task = await Task.findOneAndUpdate({
          _id: req.params.id,
          user: req.user.id, 
        },
        {
            title:req.body.title,
            description:req.body.description,
            status:req.body.status
        },{new:true})
        if(!task){
            res.json({msg:"no task exist"})
        }
        res.json(task)
    } catch (error) {
        res.send(error)
    }
   
};

exports.updateTaskPatch = async (req, res) => {
    try{
        const task=await Task.findOneAndUpdate({
             _id: req.params.id,
          user: req.user.id, 
        },
        req.body,
        {new: true},
        )
        if(!task){
            res.json({msg:"no task exist"})
        }
        res.send(task)       
    }
    catch(errro){
        res.json(error)
    }
};
exports.deleteTask=async(req,res)=>{
    try{
        const task=await Task.findOneAndDelete({
            _id:req.params.id,
            user:req.user.id
        })
        if(!task){
            res.json({msg:"no task exist"})
        }
        res.json(task); 
     }
           catch(error){
            res.json(error)
           }
}