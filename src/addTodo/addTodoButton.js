 
let addTodoButton = () => {
    let addTodoForm = document.createElement('div')
    addTodoForm.classList.add('todo-bar-form')

    const todoTitle = document.createElement('input')
    todoTitle.classList.add('add-todo-title')
    todoTitle.placeholder = "title"

    const todoDescription = document.createElement('input')
    todoDescription.classList.add('add-todo-description')
    todoDescription.placeholder = "description"

    const todoDueDate = document.createElement('input')
    todoDueDate.classList.add('add-todo-duedate')
    todoDueDate.placeholder = "due date"

    const todoPriority = document.createElement('select')
    todoPriority.classList.add('add-todo-priority')
    let prioritySelect = document.createElement('option')
    prioritySelect.text = "Priority"
    prioritySelect.disabled = true
    prioritySelect.selected = true
    todoPriority.add(prioritySelect)
    let highPriority = document.createElement('option')
    highPriority.text = "high"
    todoPriority.add(highPriority)
    let mediumPriority = document.createElement('option')
    mediumPriority.text = "medium"
    todoPriority.add(mediumPriority)
    let lowPriority = document.createElement('option')
    lowPriority.text = "low"
    todoPriority.add(lowPriority)

    let addTodoButton = document.createElement('button')
    addTodoButton.style.marginLeft = "auto"
    addTodoButton.classList.add("add-todo-button")
    addTodoButton.textContent = "+"

    addTodoForm.appendChild(todoTitle)
    addTodoForm.appendChild(todoDescription)
    addTodoForm.appendChild(todoDueDate)
    addTodoForm.appendChild(todoPriority)
    addTodoForm.appendChild(addTodoButton)

    return addTodoForm
}

export { addTodoButton }