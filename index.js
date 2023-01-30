// JS code goes here
const hamburger = document.querySelector('.hamburger')
const mobnav = document.querySelector('.mob__nav__menu')
const nvsection = document.querySelector('.nv__section')
const hamburger2 = document.querySelector('.mob__nav__menu .hamburger2')

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active')
  mobnav.classList.toggle('active')
  nvsection.classList.toggle('active')
})

document.querySelectorAll('.nv__item').forEach((n) =>
  n.addEventListener('click', () => {
    hamburger.classList.remove('active')
    hamburger.style.display = 'block'
    mobnav.classList.toggle('active')
  })
)

hamburger2.addEventListener('click', () => {
  hamburger.style.display = 'block'
  hamburger.classList.remove('active')
  mobnav.classList.toggle('active')
})
