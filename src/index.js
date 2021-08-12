import { newLayout } from "./Layout/newLayout"
import { addProject } from "./Layout/project"
import './style.css'



let hootl = document.querySelector('html')
hootl.style.height = "100%"

let bodish = document.querySelector('body')
bodish.style.height = "100%"
bodish.style.margin = "0px"

const page = document.getElementById('page')
page.style.height = "100%"


page.appendChild(newLayout)
