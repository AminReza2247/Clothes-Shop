const filterBtn = document.querySelector('#filter-btn')
const filterMenu = document.querySelector('#filter-menu')
const closeFilterBtn = document.querySelector('#close-filter-btn')

filterBtn.addEventListener('click',()=>{
    filterMenu.classList.remove('left-[-300px]')
    filterMenu.classList.add('left-0')
    overlayElem.classList.add('overlay--active');
})

closeFilterBtn.addEventListener('click',()=> {
    filterMenu.classList.add('left-[-300px]')
    filterMenu.classList.remove('left-0')
    overlayElem.classList.remove('overlay--active');
})