function changeBackgroundButton(event) { 
    const button = event.target;
    if(button.classList.contains('active')) {
        button.classList.remove('active')
    } else {
        button.classList.add('active')
    }
}
document.addEventListener('click', (event) => {
    if(event.target.tagName.toLowerCase() === 'button' && event.target.closest('.filter__buttons')) {
        changeBackgroundButton(event)
    } else if(event.target.tagName.toLowerCase() === 'button' && event.target.closest('.movies__scroll')) {
        changeBackgroundButton(event)
    }
})
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const currentPath = window.location.pathname;
    if(currentPath === '/favorites.html') {
        header.classList.add('no_bg')
    }
})

document.addEventListener('scroll', () => {
    const currentPath = window.location.pathname;
    const header = document.querySelector('header')
    if(currentPath === "/favorites.html") {
        header.classList.remove('no_bg')
    }
})

function changeActiveCategorySort(dom) { 
    const allElementsCategory = document.querySelectorAll('.filter__categoryes-item');
    allElementsCategory.forEach((element) => {
        element.classList.remove('active-category')
    })
    dom.classList.add('active-category')
}