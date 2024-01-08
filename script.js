function scrollToElement(elementSelector, instance = 0) {

    const elements = document.querySelectorAll(elementSelector)

    if (elements.length > instance) {

        elements[instance].scrollIntoView({ behavior: 'smooth' })

    }
}
const link = document.getElementById('link')
const link1 = document.getElementById('link1')
const link2 = document.getElementById('link2')
const link3 = document.getElementById('link3')

link.addEventListener('click', () => {
    scrollToElement('.container')
})
link1.addEventListener('click', () => {
    //Scrool to the second element with "header" class
    scrollToElement('.header')
})
link2.addEventListener('click', () => {
    scrollToElement('.container-princing')
})
link3.addEventListener('click', () => {
    scrollToElement('.column')
})
