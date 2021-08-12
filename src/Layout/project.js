import { newLayout } from "./newLayout"


// Creates Project object
 
 const Project = (title, description) => {
     let todoList = []
     let projectData = {
         "title": title,
         "description": description,
         "todoList": todoList
     }

     let addTodo = (todo) => todoList.push(todo)

     let getData = () => projectData

     return { getData, addTodo }
 }

 export { Project }