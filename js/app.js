const form = document.getElementById('form')
const formButton = document.getElementById('form__button')
const user = document.getElementById('user')
const deleteBtn = document.getElementById('delete__btn')
const clearBtn = document.getElementById('clear__button')


// get result and uodate UI

const updateUI = (data) =>{
    user.innerHTML= ''
    data.forEach((item)=>{
        const {gender, name, picture, location , dob} = item
        console.log(location)

        user.innerHTML += `
        <li class="user__item">
              <button id="delete__btn" class="user__delete--btn">
                <i class="fas fa-trash"></i>
              </button>
              <img
                class="user__img"
                alt="User photo"
                src=${picture.large}
                width="100"
                height="100"
              />
              <div class="user__name">
                <span class="material-symbols-outlined">badge</span>
                <span>- ${name.title} ${name.first} ${name.last}</span>
              </div>
              <div class="user__year">
                <span class="material-symbols-outlined">cake</span>
                <span>- ${dob.age} years old.</span>
              </div>
              <div class="user__location">
                <span class="material-symbols-outlined">person_pin_circle</span>
                <span>-${location.city}, ${location.country}</span>
              </div>
              <div class="user__gender">
                <span class="material-symbols-outlined">man</span>
                <span>- ${gender}</span>
              </div>
            </li>
        `
    })
}



// refresh user.innerhtnl
formButton.addEventListener('click', (e) =>{
    e.preventDefault()
    clearBtn.classList.remove('hidden')
    reload()
})

// clear user.innerhtml
clearBtn.addEventListener('click', (e) => {
    e.preventDefault()
    user.innerHTML = ''
    clearBtn.classList.add('hidden')
})

// search by name

form['form__input'].addEventListener('input', ()=>{
    const inputVal = form['form__input'].value.toLowerCase()
    const name = document.querySelectorAll('.user__name')
    console.log(name)

    name.forEach((item) =>{
        if(item.lastElementChild.textContent.toLowerCase().includes(inputVal)){
            item.parentElement.classList.remove('hidden')
        }else{
            item.parentElement.classList.add('hidden')
        }
    })

})

// delete card

document.addEventListener('click', (e)=>{
    if(e.target.classList[0] === 'user__delete--btn'){
        e.target.parentElement.remove()
    }
    if(!user.children.length){
        clearBtn.classList.add('hidden')
    }
})