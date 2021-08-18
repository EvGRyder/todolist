
// Creates Project object
 
 let Project = (title, description) => {
     let projectData = {
         "title": title,
         "description": description,
         "todoList": [],
         "id": Math.floor(Math.random() * 99999)
     }

     let addTodo = (todo) => projectData.todoList.push(todo)

     let rmvTodo = (num) => {
        projectData.todoList = projectData.todoList.filter(todo => todo.todoData.id != num) 
    }


     return { projectData, addTodo, rmvTodo }
 }

 export { Project }