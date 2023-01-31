// JS code goes here
const hamburger = document.querySelector('.hamburger')
const mobNav = document.querySelector('.mob__nav__menu')
const nvSection = document.querySelector('.nv__section')
const hamburger2 = document.querySelector('.mob__nav__menu .hamburger2')

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active')
  mobNav.classList.toggle('active')
  nvSection.classList.toggle('active')
})

document.querySelectorAll('.nv__item').forEach((item) =>
  item.addEventListener('click', () => {
    hamburger.classList.remove('active')
    hamburger.style.display = 'block'
    mobNav.classList.toggle('active')
  })
)

hamburger2.addEventListener('click', () => {
  hamburger.style.display = 'block'
  hamburger.classList.remove('active')
  mobNav.classList.toggle('active')
})
