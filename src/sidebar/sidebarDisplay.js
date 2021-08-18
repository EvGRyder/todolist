// displays the contents of the sidebar
import { ProjectTab } from "./sidebarDOM"

import { Project } from "../project/project"
import { DisplayProject } from "../project/projectDisplay"
import { Sidebar } from "./sidebar"

let SidebarDisplay = (sidebar) => {

    const sidebarDisplay = document.querySelector('nav')

    let addToDisplay = (project) => {
        let projectTab = ProjectTab(project)

        let projectTabTitle = projectTab.querySelector('.sidebar-title')
        projectTabTitle.addEventListener('click', () => {
            DisplayProject(project)
            wipeDisplay()
        })

        let projectTabCancel = projectTab.querySelector('.project-removal-button')
        projectTabCancel.addEventListener('click', () => {
            removeProjectDisplay(projectTab.id)
        })
        sidebarDisplay.appendChild(projectTab)
    }

    let addNewProject = (title, description) => {
        let newProject = Project(title, description)
        Sidebar.addProject(newProject)
        addToDisplay(newProject)
    }

    let removeProjectDisplay = (id) => {
        sidebar.rmvProject(id)
        let displayedProj = document.getElementById(id)
        displayedProj.parentElement.removeChild(displayedProj)
    }

    let newProjectButton = document.querySelector('.project-add-button')
    let newProjectName = document.querySelector('.project-add-title')
    let newProjectDescription = document.querySelector('.project-add-description')
    
    newProjectButton.addEventListener('click', () => {
        addNewProject(newProjectName.value, newProjectDescription.value)
        newProjectName.value = ""
        newProjectDescription.value = ""
    })

    let wipeDisplay = () => {
        let currentDisplay = document.querySelector('#current-display')
        currentDisplay.parentNode.removeChild(currentDisplay)
    }


    // Initialize
    let data = sidebar.getList()
    for (let i = 0; i < data.length; i++) {
        let proj = data[i]
        addToDisplay(proj)  
    }
}

export { SidebarDisplay }