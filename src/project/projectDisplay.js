import { DisplayTodo } from "../todo/todoDisplay";
import { addTodoButton } from "../addTodo/addTodoButton";
import { Todo } from "../todo/todos";

// Receives a Project object and displays it

const DisplayProject = (project) => {
    const data = project.projectData

    let titleDisplay = document.querySelector('.header-title')
    titleDisplay.textContent = data.title

    let descriptionDisplay = document.querySelector('.header-description')
    descriptionDisplay.textContent = data.description

    let mainSection = document.querySelector('section')

    let todosDisplay = document.createElement('section')
    todosDisplay.id = "current-display"

    let addForm = addTodoButton()
    todosDisplay.appendChild(addForm)


    mainSection.appendChild(todosDisplay)

    
    for (let i = 0; i < data.todoList.length; i++) {
        let displayTodo = DisplayTodo(data.todoList[i])
        let rmvButton = displayTodo.querySelector('.todo-cancel-button')
        rmvButton.addEventListener('click',() => {
            project.rmvTodo(displayTodo.id)
            todosDisplay.removeChild(displayTodo)
        })
        todosDisplay.appendChild(displayTodo)
    }
    
    // Handles addTodoButton stuff
    let addtodobutton = todosDisplay.querySelector('.add-todo-button')
    addtodobutton.addEventListener('click', () => {
        let title = addForm.querySelector('.add-todo-title')
        let desc = addForm.querySelector('.add-todo-description')
        let dueDate = addForm.querySelector('.add-todo-duedate')
        let priority = addForm.querySelector('.add-todo-priority')

        let newTodo = Todo(title.value, desc.value, dueDate.value, priority.value)
        project.addTodo(newTodo)
        console.log(project);

        title.value = ""
        desc.value = ""
        dueDate.value = ""
        priority.value = "Priority"

        todosDisplay.appendChild(DisplayTodo(newTodo))

    })
}

// Recieves a Project and adds DOM for sidebar display

let createProjectTab = (proj) => {
    let projectTab = document.createElement('div')
    projectTab.classList.add('sidebar-project')


    projectTab.textContent = proj.projectData.title


    return projectTab
}

export { DisplayProject, createProjectTab }