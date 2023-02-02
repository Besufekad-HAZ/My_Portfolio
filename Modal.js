// Modal Pop-up js code
const projectCard = document.querySelectorAll('.proj__container')

const projectsList = [
  {
    projectTitle: 'Web Designer VS Web Developer',
    description:
      'The difference between a Web Designer and a Web Developer is their areas of job focus. For example, Web Designers are only responsible for designing the layout of a website and coding different design elements like graphics, drop-down menus, color schemes and category buttons.',
    featuredImage: 'work-1.webp',
    technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
    linkToLive: 'https://besufekad-haz.github.io/My_Portfolio/',
    linkToSource: 'https://github.com/Besufekad-HAZ/My_Portfolio'
  },
  {
    projectTitle: 'What is ChatGPT and When was it Launched?',
    description:
      'ChatGPT (Chat Generative Pre-trained Transformer) is a chatbot launched by OpenAI in November 2022. It is built on top of OpenAIs GPT-3 family of large language models, and is fine-tuned (an approach to transfer learning) with both supervised and reinforcement learning techniques.',
    featuredImage: 'work-2.webp',
    technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
    linkToLive: 'https://besufekad-haz.github.io/My_Portfolio/',
    linkToSource: 'https://github.com/Besufekad-HAZ/My_Portfolio'
  },
  {
    projectTitle: 'The Story Behind Lorem Ipsum',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release',
    featuredImage: 'work-3.webp',
    technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
    linkToLive: 'https://besufekad-haz.github.io/My_Portfolio/',
    linkToSource: 'https://github.com/Besufekad-HAZ/My_Portfolio'
  },
  {
    projectTitle: 'What is a Responsive Web Design',
    description:
      'Responsive Web Design (a.k.a. "Responsive" or "Responsive Design") is an approach to design web content that appears regardless of the resolution governed by the device. Its typically accomplished with viewport breakpoints (resolution cut-offs for when content scales to that view). The viewports should adjust logically on tablets, phones, and desktops of any resolution.',
    featuredImage: 'work-4.jpg',
    technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
    linkToLive: 'https://besufekad-haz.github.io/My_Portfolio/',
    linkToSource: 'https://github.com/Besufekad-HAZ/My_Portfolio'
  },
  {
    projectTitle: 'A Knowledge About Web Accessibility',
    description:
      'When websites and web tools are properly designed and coded, people with disabilities can use them. However, currently many sites and tools are developed with accessibility barriers that make them difficult or impossible for some people to use. Making the web accessible benefits individuals, businesses, and society.',
    featuredImage: 'work-5.png',
    technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
    linkToLive: 'https://besufekad-haz.github.io/My_Portfolio/',
    linkToSource: 'https://github.com/Besufekad-HAZ/My_Portfolio'
  },
  {
    projectTitle: 'Interesting Facts about ChatGPT',
    description:
      'ChatGPT is a huge pre-trained language model introduced by OpenAI.One of the most striking characteristic of ChatGPT is its capacity to compose college-level essays in response to a prompt and sophisticated code. This raises questions about whether programmers and journalists will be replaced by new technology.',
    featuredImage: 'work-6.jpg',
    technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
    linkToLive: 'https://besufekad-haz.github.io/My_Portfolio/',
    linkToSource: 'https://github.com/Besufekad-HAZ/My_Portfolio'
  }
]
projectCard.innerHTML = ''
for (let i = 0; i < projectsList.length; i++) {
  let languages = ''
  projectsList[i].technologies.forEach((language) => {
    languages += ` <li class="bt"><a href="#">${language}</a></li> `
  })
  projectCard[i].innerHTML = `
  <img class="proj__img" src="img/${projectsList[i].featuredImage}" 
  alt="${projectsList[i].projectTitle} image" />
  <div class="proj__list">
              <h3 class="proj__title">${projectsList[i].projectTitle}</h3>
              <ul class="proj__lang">
                ${languages}
              </ul>
              <a class="see__proj__btn modal-${i}" href="#"><span>See Project</span></a>
            </div>
 `
}
// Loading Modal Modal-up section starts here

const Modal = document.querySelector('.modal__container')
const ModalTitle = document.querySelector('.modal__title')
const ModalTechnology = document.querySelector('.lang__modal')
const ModalImage = document.querySelector('.modal__image')
const ModalDescription = document.querySelector('.modal__description')
const ModalSeeLive = document.querySelector('.seelive')
const ModalSeeSource = document.querySelector('.seesource')

for (let i = 0; projectsList.length; i++) {
  document.querySelector(`.modal-${i}`).addEventListener('click', () => {
    let modalTech = ''
    projectsList[i].technologies.forEach((language) => {
      modalTech += `
        <li>${language}</li>
      `
    })
    ModalTitle.innerHTML = projectsList[i].projectTitle
    ModalTechnology.innerHTML = modalTech
    ModalImage.src = 'img/' + projectsList[i].featuredImage
    ModalDescription.innerHTML = projectsList[i].description
    ModalSeeLive.setAttribute('href', projectsList[i].linkToLive)
    ModalSeeSource.setAttribute('href', projectsList[i].linkToSource)
    Modal.style.display = 'flex'
    document.querySelector('main').style.display = 'none'
  })
}

// Close the Modal Pop-up...
function closeModal () {
  Modal.style.display = 'none'
  document.querySelector('main').style.display = 'block'
}

closeModal()
