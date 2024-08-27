import router from "./router.js";
const links = document.querySelectorAll('.spa-link')

links.forEach(link => {
    link.addEventListener('click',(event) =>{
        // event.preventDefault();

        urlRoutes(event);
    })
})

function urlRoutes (event){
    window.history.pushState({},"",event.target.href)
    locationHandler()
}

async function locationHandler() {
    const loc = window.location.pathname;
    const route = router[loc];
    console.log(loc);
    const html = await fetch(route.template).then(res => res.text());
    console.log(html);
    document.querySelector('#content').innerHTML = html;
}

window.onpopstate = locationHandler;