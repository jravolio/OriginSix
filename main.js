const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle') // procura tudo que está dentro dos parametros


for (const element of toggle) {
    element.addEventListener('click', function(){
        nav.classList.toggle('show')
    })
}

// monitora os links de titulos(inicio,sobre,contato,etc)
const links = document.querySelectorAll('nav ul li a')

for (const link of links){
    link.addEventListener('click', function(){
        nav.classList.remove('show')
    })
}

/* detectar scroll e etc */

const header = document.querySelector("#header")
const navHeight = header.offsetHeight;

window.addEventListener('scroll', function(){
    if(window.scrollY>= navHeight){
        header.classList.add('scroll')
    }
    else{
        header.classList.remove('scroll')
    }
})