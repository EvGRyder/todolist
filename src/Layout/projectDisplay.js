import { newLayout } from "./newLayout";
import { Project } from "./project";

// Recieves a Project object and displays it

const DisplayProject = (projectData) => {
    let data = projectData.data
    let titleDisplay = document.querySelector('.header-title')
    titleDisplay.textContent = "Project Name"
}

export { DisplayProject }