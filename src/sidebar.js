// Creates the sidebar object, with its projects

const Sidebar = () => {
    let projectList = []

    let addProject = (project) => projectList.push(project)

    return { projectList, addProject}
}

export { Sidebar }