const express = require("express")
const router = express.Router()

const { createTask,readTask,getTaskById,updateTask,deleteTask,updateTaskPatch} = require("../controllers/taskController") // ✅ correct name
const { protect } = require("../middleware/authmiddleware")
router.post("/newTask", protect,createTask)
router.get("/readTask",protect,readTask)
router.get("/getTask/:id",protect,getTaskById)
router.put("/updateTask/:id",protect,updateTask)
router.delete("/deleteTask/:id",protect,deleteTask)
router.patch("/updateTaskPatch/:id",protect,updateTaskPatch)
module.exports = router