import  Express  from "express";
import TaskController from "../Controllers/TaskController.js"

const router = Express.Router()

router.route("/add")
    .get(TaskController.createTask)
    .post(TaskController.createTaskSave)
    
router.route("/")
    .get(TaskController.showTasks)  


router.route("/remove")
    .post(TaskController.removeTask)  


router.route("/edit/:id")
    .get(TaskController.editTask)  
    .post(TaskController.editTaskSave)
    


router.route("/done/:id") 
    // .post(TaskController.editDone)
    .post(TaskController.editDoneSave)

export default router;