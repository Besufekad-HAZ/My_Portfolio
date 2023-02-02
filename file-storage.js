// The Following code t
const contactForm = document.querySelector('form')
const fnameVal = document.getElementById('f_name')
const lnameVal = document.getElementById('l_name')
const emailVal = document.getElementById('mail')
const msgVal = document.getElementById('msg')

contactForm.addEventListener('input', () => {
  const formData = {
    firstName: fnameVal.value,
    lastName: lnameVal.value,
    email: emailVal.value,
    message: msgVal.value
  }
  localStorage.setItem('userData', JSON.stringify(formData))
})
