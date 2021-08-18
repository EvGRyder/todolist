// Creates the sidebar object, with its projects

let Sidebar = (() => {
    let projectList = []

    let addProject = (project) => projectList.push(project)

    let rmvProject = (num) => {
        console.log(projectList);
        projectList = projectList.filter((proj) => proj.projectData.id != num)
        console.log(projectList);
    }

    let getList = () => projectList


    return { getList, addProject, rmvProject}
})()

export { Sidebar }