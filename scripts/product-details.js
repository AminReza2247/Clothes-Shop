
// Details Tab Switch

const detailTabs = document.querySelectorAll('.details')

detailTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelector('.details--active').classList.remove('details--active')
        tab.classList.add('details--active')
    })
})