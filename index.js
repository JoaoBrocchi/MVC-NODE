import  Express  from "express";
import conn from "./db/conn.js";
import bodyParser from "body-parser";
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import Task from "./models/Task.js";
import tasksRoutes from "./routes/taskroutes.js";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = Express()

app.set("view engine", "ejs")
app.use(bodyParser.json())
app.use(Express.urlencoded({extended: true}))
app.use(Express.static(path.join(__dirname, "public")))

app.use("/tasks", tasksRoutes)

conn.sync().then((result) => {
}).catch((err) => {
    console.log(err)
});

app.listen(3000,(req,res)=>{
    console.log("agora FOi")
})