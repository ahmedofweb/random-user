// api
const API = 'https://randomuser.me/api/?results=9'

// for leader
const overlay = document.getElementById('overlay')

// Loader
function loaderToggle(toggle){
    if(toggle){
        overlay.classList.remove('hidden')
    }else{
        overlay.classList.add('hidden')
    }
}

// request promise

function getData(resource){
    return new Promise((resolve , reject) => {
        const request = new XMLHttpRequest()

        request.addEventListener('readystatechange', ()=> {
            if(request.readyState < 4){
                loaderToggle(true)
            }else if(request.readyState == 4 && request.status == 200){
                const data = JSON.parse(request.responseText)
                loaderToggle(false)
                resolve(data.results)
            }else if(request.readyState == 4){
                reject('malumotni yuklshni iloji bolmadi...')
                loaderToggle(false)
            }
        })
        request.open('GET', resource)
        request.send()
    })
}

// load
const reload = ()=> {
    getData(API)
    .then((data)=>{
        updateUI(data)
    })
    .catch((err) =>{
        console.log(err)
    })
    
}
document.addEventListener('DOMContentLoaded', reload)