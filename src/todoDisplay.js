// Receives a todo and displays is

const DisplayTodo = (todo) => {
    let data = todo.todoData
    
    const todoBar = document.createElement('div')
    todoBar.classList.add('todo-bar')

    const todoTitle = document.createElement('span')
    todoTitle.textContent = data.title
    todoBar.appendChild(todoTitle)

    const todoDescription = document.createElement('span')
    todoDescription.textContent = data.description
    todoBar.appendChild(todoDescription)

    const todoDueDate = document.createElement('span')
    todoDueDate.textContent = data.dueDate
    todoBar.appendChild(todoDueDate)

    const todoPriority = document.createElement('span')
    todoPriority.textContent = data.priority
    todoBar.appendChild(todoPriority)

    todoBar.id = data.id

    return { todoBar }
}

export { DisplayTodo }