import { where } from "sequelize"
import Task from "../models/Task.js"

class TaskController {
    static createTask(req,res){
        res.render('tasks/create')
        
    }
    static async showTasks (req,res){
        const tasks = await Task.findAll({raw:true})
        res.render('tasks/all', {tasks: tasks})
        
    }
    static async createTaskSave(req,res){
        const newtask = Task.build({
            title : req.body.title,
            description : req.body.description,
            done : false
        }
        )
        await newtask.save()
        res.redirect("/tasks")
        
    }
    static async removeTask(req,res){
        const id = req.body.id
        await Task.destroy({where: {id : id}})
        res.redirect("/tasks")
    }

    static async editTask(req,res){
        const id = await req.params.id
        console.log(id)
        const taskToChange = await Task.findOne({where:{id : id}})
        res.render("tasks/edit", {task : taskToChange})
        
    }

    static async editTaskSave(req,res){
        const id = await req.body.id

        const task = {
            title : await req.body.title,
            description : await req.body.description

        }
        await Task.update(task,{where:{id : id}})
        
        res.redirect("/tasks")
        
    }

    static async editDoneSave(req,res){
        const id = await req.body.id
        const task = {
            done : req.body.done === '0' ? true : false
        }
        await Task.update(task,{where:{id : id}})
        res.redirect("/tasks")

    }
    
    // static async editDone(req,res){
    //     // const id = await req.body.id
    //     // await Task.update({done : true},{where:{id : id}})
    //     const tasks = await Task.findAll({raw:true})
    //     res.render('tasks/all', {tasks: tasks})

    // }
    
};

export default TaskController