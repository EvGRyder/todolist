import { newLayout } from "./newLayout"

import { Todo } from "./todo/todos"

import { Project } from "./project/project"
import { DisplayProject } from "./project/projectDisplay"

import { Sidebar } from "./sidebar/sidebar"
import { SidebarDisplay } from "./sidebar/sidebarDisplay"

import './style.css'



let hootl = document.querySelector('html')
hootl.style.height = "100%"

let bodish = document.querySelector('body')
bodish.style.height = "100%"
bodish.style.margin = "0px"

const page = document.getElementById('page')
page.style.height = "100%"


page.appendChild(newLayout)

let testToto = Todo("title", "description", "dueDate", "high")
let testToto2 = Todo("title2", "description2", "dueDate2", "medium")
let testToto3 = Todo("title3", "description3", "dueDate3", "low")

let testProject = Project("Project Title", "Current description for this project")
testProject.addTodo(testToto)
testProject.addTodo(testToto2)
testProject.addTodo(testToto2)
testProject.addTodo(testToto3)


let testProject2 = Project("Project Title2", "Current description for this project")
testProject2.addTodo(testToto)
testProject2.addTodo(testToto2)

let testSidebar = Sidebar
testSidebar.addProject(testProject)
testSidebar.addProject(testProject2)


SidebarDisplay(testSidebar)

DisplayProject(testProject)
