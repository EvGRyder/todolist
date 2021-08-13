import { DisplayTodo } from "./todoDisplay";

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

    console.log(todosDisplay);

    mainSection.appendChild(todosDisplay)

    
    for (let i = 0; i < data.todoList.length; i++) {
        let displayTodo = DisplayTodo(data.todoList[i]).todoBar

        displayTodo.addEventListener('click',() => {
            project.rmvTodo(displayTodo.id)
            todosDisplay.removeChild(displayTodo)
        })
        todosDisplay.appendChild(displayTodo)
    }

}

export { DisplayProject }