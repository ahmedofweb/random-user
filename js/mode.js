const body = document.querySelector('body')
const darkBtn = document.getElementById('dark-btn')
const lightBtn = document.getElementById('light-btn')

const localML = localStorage.getItem('mode')
if(localML){
    body.classList.add('dark-mode')
    darkBtn.classList.toggle('hidden')
    lightBtn.classList.toggle('hidden')

}

darkBtn.addEventListener('click', ()=> {
    drklght(darkBtn, lightBtn)
    localStorage.setItem('mode', 'dark-mode')
})

lightBtn.addEventListener('click', ()=> {
    drklght(lightBtn, darkBtn)
    localStorage.setItem('mode', '')
})

function drklght(a, b){
    body.classList.toggle('dark-mode')
    a.classList.toggle('hidden')
    b.classList.remove('hidden')
}
