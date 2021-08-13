// displays the contents of the sidebar

import { DisplayProject } from "./projectDisplay"

const SidebarDisplay = (sidebar) => {
    let data = sidebar.projectList

    const sidebarDisplay = document.querySelector('nav')

    for (let i = 0; i < data.length; i++) {
        const sidebarProject = document.createElement('div')
        sidebarProject.classList.add('sidebar-project')
        sidebarProject.textContent = data[i].projectData.title
        sidebarProject.addEventListener('click', () => {
            DisplayProject(data[i])
            wipeDisplay()
        })
        sidebarDisplay.appendChild(sidebarProject)
    }

    let wipeDisplay = () => {
        let currentDisplay = document.querySelector('#current-display')
        currentDisplay.parentNode.removeChild(currentDisplay)
    }
}

export { SidebarDisplay }