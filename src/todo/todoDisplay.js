// Receives a todo and displays is

const DisplayTodo = (todo) => {
    let data = todo.todoData

    let todoDiv = document.createElement('div')
    todoDiv.classList.add('todo-div')
    
    const todoBar = document.createElement('div')
    todoBar.classList.add('todo-bar')

    const todoTitle = document.createElement('span')
    todoTitle.textContent = data.title
    todoTitle.classList.add('todo-title')
    todoBar.appendChild(todoTitle)

    const todoDescription = document.createElement('span')
    todoDescription.textContent = data.description
    todoDescription.classList.add('todo-description')
    todoBar.appendChild(todoDescription)

    const todoDueDate = document.createElement('span')
    todoDueDate.textContent = data.dueDate
    todoDueDate.classList.add('todo-dueDate')
    todoBar.appendChild(todoDueDate)

    const todoPriority = document.createElement('span')
    todoPriority.classList.add('todo-priority')
    todoPriority.style.background = priorityCheck(data.priority)

    let todoCancelButton = document.createElement('button')
    todoCancelButton.classList.add('todo-cancel-button')
    todoCancelButton.textContent = "X"

    todoDiv.appendChild(todoBar)
    todoDiv.appendChild(todoPriority)
    todoDiv.appendChild(todoCancelButton)

    todoDiv.id = data.id
    return todoDiv
}

let priorityCheck = (val) => {
    switch(val) {
        case "high": return "red"; break;
        case "medium": return "yellow"; break;
        case "low": return "green"; break;
    }
}

export { DisplayTodo }