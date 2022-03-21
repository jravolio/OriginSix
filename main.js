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
function changeHeaderWhenScroll(){
    if(window.scrollY>= navHeight){
        header.classList.add('scroll')
    }
    else{
        header.classList.remove('scroll')
    }
}


// TESTIMONIALS SLIDER/CARROSEL
const swiper = new Swiper('.swiper-container',{
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        767:{
            slidesPerView: 2,
            setWrapperSize: true
        }
    }
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
const backToTopButton = document.querySelector('.back-to-top')
function backToTop() {
    if(window.scrollY >= 560) {
        backToTopButton.classList.add('show')
    }
    else{
        backToTopButton.classList.remove('show')
    }
}


// menu ativo dependendo de onde esteja na pág
const sections = document.querySelectorAll('main section[id]') // pega todas as sections que contém um atributo id
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

// HOVER NOS CARDS / hover no css

var cardSelected = document.querySelectorAll('.card')
for(const card of cardSelected){
    card.addEventListener('mouseover', function(){
        card.setAttribute('style', 'background-color:white')
    })}


// Agrupado de functions
window.addEventListener('scroll', function(){
  backToTop()
  changeHeaderWhenScroll()
  activateMenuAtCurrentSection()
})

