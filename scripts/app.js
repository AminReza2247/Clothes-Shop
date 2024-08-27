// Dark Mode Codes

const toggleThemeBtn = document.querySelector(".toggle-theme");
toggleThemeBtn.addEventListener("click" , () => {
        if (localStorage.theme === "dark"){
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme" , "dark");
        }
    })

//Upper Navbar Codes

const upperNavbarElem = document.querySelector('#upper-navbar')
const xBtn = document.querySelector('#x-btn')

xBtn.addEventListener('click',() => {
    upperNavbarElem.classList.add('hidden')
})


// Mobile Menu

const menuBtn = document.querySelector('#menu-btn')
const closeMenuBtn = document.querySelector('#close-menu-btn')
const overlayElem = document.querySelector('.overlay')
const mobileMenu = document.querySelector('#mobile-menu')
const shopItem = document.querySelector('#shop-item')
const subMenu = document.querySelector('.sub-menu')

menuBtn.addEventListener('click',() => {
    mobileMenu.classList.remove('right-[-250px]')
    mobileMenu.classList.add('right-0')
    mobileMenu.classList.remove('hidden')
    overlayElem.classList.add('overlay--active');
})

closeMenuBtn.addEventListener('click',() => {
    mobileMenu.classList.add('right-[-250px]')
    mobileMenu.classList.remove('right-0')
    mobileMenu.classList.add('hidden')
    overlayElem.classList.remove('overlay--active');
})

shopItem.addEventListener('click',() => {
    subMenu.classList.toggle('sub-menu--active')
    subMenu.parentElement.classList.toggle('text-emerald-500')
    shopItem.classList.toggle('bg-emerald-500/20')

})


