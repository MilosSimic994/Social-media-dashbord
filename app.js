const change = document.querySelector('.change')
const body = document.querySelector('body')
const titleChange = document.querySelector('.title-change')


change.addEventListener('click', ()=> {
    body.classList.toggle('light')
    

    if(body.classList.contains('light')) {
        titleChange.textContent = 'Light Mode'
    }
    else {
        titleChange.textContent = 'Dark Mode'
    }
})