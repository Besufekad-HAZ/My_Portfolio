function validate () {
  const text = document.getElementById('mail').value
  const regx = /^([a-z\d-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
  const msg = document.querySelector('#chk__message')
  document.forms[0].onsubmit = function (event) {
    if (regx.test(text)) {
      document.getElementById('chk__message').innerHTML =
        'Submitted Successfully'
      document.getElementById('chk__message').style.color = 'green'
      msg.classList.toggle('active')
      msg.reset()
    } else {
      document.getElementById('chk_message').innerHTML =
        'Invalid !!! Please enter the email in lower case'
      document.getElementById('chk__message').style.color = 'red'
      msg.classList.toggle('active')
      event.preventDefault()
    }
  }
}

validate()
