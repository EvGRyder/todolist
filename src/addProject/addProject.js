
let addProject = (() => {

    let ProjectAdd = document.createElement('div')
    ProjectAdd.classList.add('project-add')

    let projectEntry = document.createElement('input')
    projectEntry.classList.add('project-add-title')

    let projectDescription = document.createElement('textarea')
    projectDescription.rows = 3
    projectDescription.maxLength = 50
    projectDescription.classList.add('project-add-description')

    let projectAddButton = document.createElement('button')
    projectAddButton.textContent = "Add Project"
    projectAddButton.classList.add('project-add-button')


    ProjectAdd.appendChild(projectEntry)
    ProjectAdd.appendChild(projectDescription)
    ProjectAdd.appendChild(projectAddButton)

    return ProjectAdd
})()

export { addProject }