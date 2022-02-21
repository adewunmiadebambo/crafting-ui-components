let slides = document.querySelectorAll('.slider-item')
let nextBtn = document.querySelector('#next')
let prevBtn = document.querySelector('#prev')

let currentSlideIndex = 0;

nextBtn.addEventListener('click', () => {
    slides[currentSlideIndex].classList.remove('current')
    currentSlideIndex += 1
    if (currentSlideIndex === slides.length) {
        currentSlideIndex = 0
    }
    slides[currentSlideIndex].classList.add('current')
})

prevBtn.addEventListener('click', () => {
    slides[currentSlideIndex].classList.remove('current')
    currentSlideIndex -= 1
    if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1
    }
    slides[currentSlideIndex].classList.add('current')
})

const passwordInput = document.querySelector('#password-box input')
const passwordBtn = document.querySelector('#password-box button')

passwordBtn.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text'
        passwordBtn.innerHTML = 'hide'
    } else {
        passwordInput.type = 'password'
        passwordBtn.innerHTML = 'show'
    }
})

let list = document.querySelectorAll('#menu li') 

list.forEach(item => {
    item.addEventListener('click', () => {
        list.forEach(li => li.classList.remove('bold'))
        item.classList.add('bold')
    })
})