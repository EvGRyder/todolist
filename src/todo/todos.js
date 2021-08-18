// Todo constructor

let Todo = (title, description, dueDate, priority) => {
    let todoData = {
        "title": title,
        "description": description,
        "dueDate": dueDate,
        "priority": priority,
        "id": Math.floor(Math.random() * 99999)
    }

    return { todoData }
}

export { Todo }