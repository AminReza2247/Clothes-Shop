const loginTitle = document.querySelector('#login-title')
const signUpTab =document.querySelector('#sign-up-tab')
const signInTab =document.querySelector('#sign-in-tab')
const signInPageBtn = document.querySelector('#sign-in-page-btn')
const signUpPageBtn = document.querySelector('#sign-up-page-btn')


signUpPageBtn.addEventListener('click', (event) =>{
    event.preventDefault()
    signInTab.classList.add('login--hidden')
    signUpTab.classList.remove('login--hidden')
    loginTitle.innerHTML = 'Sign Up'
})

signInPageBtn.addEventListener('click', (event) =>{
    event.preventDefault()
    signInTab.classList.remove('login--hidden')
    signUpTab.classList.add('login--hidden')
    loginTitle.innerHTML = 'Sign In'
})

// Handling Password Inputs

const eye1Btn = document.querySelector('.eye1')
const eye2Btn = document.querySelector('.eye2')
const eye3Btn = document.querySelector('.eye3')
const confirmPassword = document.querySelector('#confirm-password-sign-up')
const password = document.querySelector('#password-sign-up')
const signInPassword = document.querySelector('#sign-in-password')
let eye1Flag = false
let eye2Flag = false
let eye3Flag = false

const passwordLabel = document.querySelector('#password-sign-up-label')
const confirmLabel = document.querySelector('#confirm-password-sign-up-label')


    eye1Btn.addEventListener('click', event => {
        if (!eye1Flag){
            event.target.innerHTML = `<use class="pointer-events-none" href="#eye-slash"></use>`
            password.setAttribute('type','text')
            eye1Flag = true
        }else {
            event.target.innerHTML = `<use class="pointer-events-none" href="#eye"></use>`
            password.setAttribute('type','password')
            eye1Flag = false
        }
    })

    eye2Btn.addEventListener('click', event => {
        if (!eye2Flag){
            event.target.innerHTML = `<use class="pointer-events-none" href="#eye"></use>`
            confirmPassword.setAttribute('type','text')
            eye2Flag = true
        }else {
            event.target.innerHTML = `<use class="pointer-events-none" href="#eye-slash"></use>`
            confirmPassword.setAttribute('type','password')
            eye2Flag = false
        }
    })

    eye3Btn.addEventListener('click', event => {
        if (!eye3Flag){
            event.target.innerHTML = `<use class="pointer-events-none" href="#eye"></use>`
            signInPassword.setAttribute('type','text')
            eye3Flag = true
        }else {
            event.target.innerHTML = `<use class="pointer-events-none" href="#eye-slash"></use>`
            signInPassword.setAttribute('type','password')
            eye3Flag = false
        }
    })


confirmPassword.addEventListener('change',()=>{
    if (confirmPassword.value.length > 8){
        confirmLabel.innerHTML = 'Correct'
        confirmLabel.classList.add('text-emerald-500')
        confirmLabel.classList.remove('text-red-600')
    }else {
        confirmLabel.innerHTML = 'At least 8 characters'
        confirmLabel.classList.remove('text-emerald-500')
        confirmLabel.classList.add('text-red-600')
    }
})
password.addEventListener('change',()=>{
    if (password.value.length > 8){
        passwordLabel.innerHTML = 'Correct'
        passwordLabel.classList.add('text-emerald-500')
        passwordLabel.classList.remove('text-red-600')
    }else {
        passwordLabel.innerHTML = 'At least 8 characters'
        passwordLabel.classList.remove('text-emerald-500')
        passwordLabel.classList.add('text-red-600')
    }
})