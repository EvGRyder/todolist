
 const newLayout = (() => {
    let workingDiv = document.createElement('div')
    workingDiv.classList.add('page')

    let sidebar = document.createElement('nav')

    let main = document.createElement('main')
    let header = document.createElement('header')
    let section = document.createElement('section')

    workingDiv.appendChild(sidebar)
    main.appendChild(header)

    main.appendChild(section)

    workingDiv.appendChild(main)

    return workingDiv
 })()

 export { newLayout }