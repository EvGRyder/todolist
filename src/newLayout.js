
 const newLayout = (() => {
    let workingDiv = document.createElement('div')
    workingDiv.classList.add('page')

    let sidebar = document.createElement('nav')

    let main = document.createElement('main')
    let header = document.createElement('header')
    
    let section = document.createElement('section')

    let headerTitle = document.createElement('div')
    headerTitle.classList.add("header-title")

    let headerDescription = document.createElement('div')
    headerDescription.classList.add("header-description")

    workingDiv.appendChild(sidebar)
    header.appendChild(headerTitle)
    header.appendChild(headerDescription)
    main.appendChild(header)

    main.appendChild(section)

    workingDiv.appendChild(main)

    return workingDiv
 })()

 export { newLayout }