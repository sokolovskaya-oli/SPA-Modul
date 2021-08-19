const charset =document.createElement('meta')
const viewport = document.createElement('meta')
const link = document.createElement('link')
const link2 = document.createElement('link')
const link3 = document.createElement('link')
const link4 = document.createElement('link')
const title =document.createElement('title')

charset.setAttribute('charset','UTF-8')
viewport.setAttribute('name','viewport')
viewport.setAttribute('content','width=device-width, initial-scale=1.0')
link.setAttribute('rel','stylesheet')
link.setAttribute('href','css/font-awesome.min.css')
link2.setAttribute('rel','stylesheet')
link2.setAttribute('href','css/style.css')
link3.setAttribute('rel','preconnect')
link3.setAttribute('href','https://fonts.googleapis.com')
link4.setAttribute('href','https://fonts.googleapis.com/css2?family=Georama:ital,wght@0,400;0,600;0,700;1,400&display=swap')
link4.setAttribute('rel','stylesheet')

document.head.appendChild(charset),
document.head.appendChild(viewport),
document.head.appendChild(link),
document.head.appendChild(link2),
document.head.appendChild(link3),
document.head.appendChild(link4),
document.head.appendChild(title)




export {title}