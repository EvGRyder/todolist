

let ProjectTab = (proj) => {
    let projectTab = document.createElement('div')
    projectTab.classList.add('sidebar-tab')
    projectTab.id = proj.projectData.id

    let projectTitle = document.createElement('div')
    projectTitle.classList.add('sidebar-title')

    projectTitle.textContent = proj.projectData.title

    projectTab.appendChild(projectTitle)


    let removeProject = document.createElement('button')
    removeProject.textContent = "X"
    removeProject.classList.add('project-removal-button')

    projectTab.appendChild(removeProject)

    return projectTab
}

export { ProjectTab }