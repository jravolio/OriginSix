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
function changeHeaderWhenScroll(){
    const header = document.querySelector("#header")
    const navHeight = header.offsetHeight;
    if(window.scrollY>= navHeight){
        header.classList.add('scroll')
    }
    else{
        header.classList.remove('scroll')
    }
}


// TESTIMONIALS SLIDER/CARROSEL
const swiper = new Swiper('.swiper-container',{
    slidesPewView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
})

// SCROLL REVEAL
const scrollReveal = ScrollReveal({
    origin:'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(`#home .image, #home .text, 
#about .image, #about .text
#services header, #services .card,
#testimonials header, #testimonials .testimonials
#contact .text, #contact .links,
footer .brand, footer .social`, 
{interval:100})


// BACK TO TOP
function backToTop() {
    const backToTopButton = document.querySelector('.back-to-top')
    if(this.window.scrollY >= 560) {
        backToTopButton.classList.add('show')
    }
    else{
        backToTopButton.classList.remove('show')
    }
}


// Agrupado de functions
window.addEventListener('scroll', function(){
  backToTop()
  changeHeaderWhenScroll()
})