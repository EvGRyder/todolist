import { newLayout } from "./newLayout"
import { DisplayProject } from "./projectDisplay"
import { addProject } from "./project"
import { Todo } from "./todos"
import { Project } from "./project"
import { Sidebar } from "./sidebar"
import { SidebarDisplay } from "./sidebarDisplay"
import './style.css'
import { lowerFirst } from "lodash"



let hootl = document.querySelector('html')
hootl.style.height = "100%"

let bodish = document.querySelector('body')
bodish.style.height = "100%"
bodish.style.margin = "0px"

const page = document.getElementById('page')
page.style.height = "100%"


page.appendChild(newLayout)

let testToto = Todo("title", "description", "dueDate", "Urgency")
let testToto2 = Todo("title2", "description2", "dueDate2", "Urgency2")

let testProject = Project("Project Title", "Current description for this project")
testProject.addTodo(testToto)
testProject.addTodo(testToto2)
testProject.addTodo(testToto2)
testProject.addTodo(testToto2)
testProject.addTodo(testToto2)
testProject.addTodo(testToto2)
testProject.addTodo(testToto2)
testProject.addTodo(testToto2)
testProject.addTodo(testToto2)
testProject.addTodo(testToto2)
testProject.addTodo(testToto2)
testProject.addTodo(testToto2)
testProject.addTodo(testToto2)
testProject.addTodo(testToto2)
testProject.addTodo(testToto2)
testProject.addTodo(testToto2)

let testProject2 = Project("Project Title2", "Current description for this project")
testProject2.addTodo(testToto)
testProject2.addTodo(testToto2)

let testSidebar = Sidebar()
testSidebar.addProject(testProject)
testSidebar.addProject(testProject2)

SidebarDisplay(testSidebar)

DisplayProject(testProject)
