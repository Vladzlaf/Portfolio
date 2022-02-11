import i18Obj from "./translate.js";
// =============================================================-------Функционал секции Portfolio-------============================================================================================
const portfolioBtn = document.querySelectorAll('.button-type');
const portfolioBtns = document.querySelector('.portfolio-btns');
const portfolioImage = document.querySelectorAll('.port-img');

portfolioBtns.addEventListener ('click', function changeImageAndchangeClassActive (event) {
    if (event.target.classList.contains("button-type")) {
        portfolioImage.forEach((img, index) => img.src = `./assets/img/${event.target.dataset.season}/${index + 1}.jpg`);
    }
    portfolioBtn.forEach((element) => {
        element.classList.remove('active')
    })
    event.target.classList.add('active')
}
)

// =============================================================-------Функционал перевода сайта-------============================================================================================
const ruL = document.querySelector('.ru_button')
const enL = document.querySelector('.en_button')
const trnslText = document.querySelectorAll('[data-i18]')
const buttonsLang = document.querySelectorAll ('.buttonl')
const containerBtns = document.querySelector ('.header_switch_button')

function getTranslate(lang) {
    trnslText.forEach((element) => element.textContent = i18Obj[lang][element.dataset.i18])
}

ruL.addEventListener('click', () => getTranslate('ru'));
enL.addEventListener('click', () => getTranslate('en'))

function changeActiveSwch (event) {
    buttonsLang.forEach((element) => {
        element.classList.remove('active-switcher')
    })
    event.target.classList.add('active-switcher')
}

containerBtns.addEventListener ('click', changeActiveSwch )



// enL.forEach((element) => {
//     element.classList.remove('activelang')
// })
// event.target.classList.add('activelang')
// ruL.forEach((element) => {
//     element.classList.remove('activelang')
// })
// event.target.classList.add('activelang')



// =============================================================-------Функционал смены темы-------============================================================================================

const lighItems = document.querySelectorAll ('.light-item');
const switcher = document.querySelector ('.switcher')
const lighItems2 = document.querySelectorAll ('.light-elem');

function changeTheme () {
    lighItems.forEach ((element) => element.classList.toggle ('light-theme'));
    lighItems2.forEach ((element) => element.classList.toggle ('light-theme-elem'));
}

console.log (switcher.addEventListener ('click', changeTheme)) 

// const lighItems2 = document.querySelectorAll ('.light-elem');
// const switcher = document.querySelector ('.switcher')

// function changeTheme2 () {
    // lighItems2.forEach ((element) => element.classList.toggle ('light-theme-elem'));
// }

// console.log (switcher.addEventListener ('click', changeTheme2)) 




