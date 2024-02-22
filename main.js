import './assets/scss/style.scss'

const body = document.querySelector('body')
const main = document.querySelector('main')
const attribution = document.querySelector('.attribution')
const btnOpen = document.querySelector('#btnOpen')
const btnClose = document.querySelector('#btnClose')
const media = window.matchMedia('(width < 69.375em)')
const navElement = document.querySelector('.nav__content')
const overlay = document.querySelector('.nav__overlay')

function openMobileMenu() {
  // console.log('open menu')

  btnOpen.setAttribute('aria-expanded', 'true')
  body.classList.add('noscroll')
  navElement.removeAttribute('inert')
  main.setAttribute('inert', '')
  attribution.setAttribute('inert', '')
  btnClose.focus()
}

function closeMobileMenu() {
  // console.log('close menu')

  btnOpen.setAttribute('aria-expanded', 'false')
  body.classList.remove('noscroll')
  navElement.setAttribute('inert', '')
  main.removeAttribute('inert')
  attribution.removeAttribute('inert')
  btnOpen.focus()
}

function setupNav(e) {
  if (e.matches) {
    // is mobile
    // console.log('is mobile view')

    navElement.setAttribute('inert', '')

    setTimeout(() => {
      navElement.style.display = 'block'
      overlay.style.display = 'block'
    }, 500)
  } else {
    // is desktop
    // console.log('is desktop view')
    navElement.style.display = ''
    navElement.removeAttribute('inert')
    main.removeAttribute('inert')
    attribution.removeAttribute('inert')
  }
}

setupNav(media)

btnOpen.addEventListener('click', openMobileMenu)
btnClose.addEventListener('click', closeMobileMenu)

media.addEventListener('change', function (e) {
  setupNav(e)
})

document.addEventListener('keyup', (e) => {
  if (e.key === 'Tab') {
    console.log(document.activeElement)
  }
})
