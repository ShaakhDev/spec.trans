import { svg, socials } from './svgs.js'

const cards = document.querySelector('#vehicleCardBox');
const loadMoreButton = document.querySelector('#loadMoreButton');
const services = document.querySelector('#servicesCardBox');
const info = document.querySelector('#servicesInfo')
const gallery = document.querySelector('#galleryBox')
const contact = document.querySelector('#contactBox');
const socialsBox = document.querySelector('#socialsBox');
const html = document.querySelector('html')
const menuBtn = document.querySelector('#menuBtn')
const menuCloseBtn = document.querySelector("#menuCloseBtn")
const navbarMenu = document.querySelector('#navbarMenu')

var vehicleNames = [
    "Экскаватор-погрузчик",
    "Самосвал",
    "Кран-манипулятор",
    "Автобетоносмеситель",
    "Бетононасос",
    "Бульдозер"

];
const serviceNames = [
    "Доставка щебня и песка",
    "Земельные работы",
    "Благоустройство дворовых территорий, асфальтирование"
];

const infos = [
    "Аренда техники возможна с оператором",
    "Индивидуальные условия строительным компаниям и подрядчикам",
    "Скидки для постоянных клиентов"
];

const contacts = [
    "+7 (999) 999-99-99",
    "info@spectrans.ru",
    "Ежедневно с 9:00 до 19:00"
]


//toggle effect for load more button in the suggestion section
loadMoreButton.addEventListener('click', () => {
    loadMore()
})


function loadMore() {
    if (loadMoreButton.classList.contains('loadmore')) {
        vehicleNames = [...vehicleNames, ...vehicleNames]
        renderVehicleCards(vehicleNames)
        loadMoreButton.classList.toggle('loadmore')
        loadMoreButton.innerHTML = 'Смотреть меньше'
        console.log(vehicleNames)
    } else {
        vehicleNames.length = 6;
        renderVehicleCards(vehicleNames)
        loadMoreButton.innerHTML = 'Смотреть всю технику'
        loadMoreButton.classList.toggle('loadmore')
    }
}

//this function renders cards of the vehicles
function renderVehicleCards(names) {
    cards.innerHTML = names.map((name, index) => {
        if (index > 5) index -= 6
        return `
        <div class="vehicle-card card">
        <div class="vehicle-name">
            <span>${name}</span>
        </div>
        <div class="card-img">
        
            <img src="./images/vehicle-${index + 1}.webp" alt="vehicle">
        </div>
        </div>
        `
    }).join(' ')
    return
}

//this function renders cards of the services
function renderServiceCards(names) {
    services.innerHTML = names.map((name, index) => {
        return `
        <div class="service-card card">
        <div class="service-name">
            <span>${name}</span>
        </div>
        <div class="card-img">
             <img src="./images/service-${index + 1}.webp" alt="service">
        </div>
    </div>
        `
    }).join(' ')
    return
}


//this function renders columns of info
function renderServiceInfo(infos) {
    info.innerHTML = infos.map((item, index) => {
        return `
        <div class="service">
           <span>${svg[index]}</span>
            <p>${item}</p>
        </div>
        `
    }).join(' ')
    return
}

function renderGallery() {
    for (let i = 0; i < 6; i++) {
        gallery.innerHTML += `
         <div class="gallery-item">
               <img class="w-100" src="./images/g-item-${i + 1}.webp" alt="">
          </div>
        `
    }
    return
}

function renderContact(contacts) {
    contact.innerHTML = contacts.map((item, index) => {
        return `
        <div class="contact-item">
            <img src="./images/contact-${index + 1}.svg" alt="">
            <span>${item}</span>
        </div>
        `
    }).join(' ')
}


function renderFooterSocials(socials) {
    socialsBox.innerHTML = socials.map((icon) => {
        return ` 
        <a href="#">
            ${icon}
        </a>`
    }).join(' ')
}
//execution of above functions
renderVehicleCards(vehicleNames)
renderServiceCards(serviceNames)
renderServiceInfo(infos)
renderGallery()
renderContact(contacts);
renderFooterSocials(socials);







//opening and closing the menu


window.addEventListener('resize', () => {
    if (window.innerWidth > 1536) {
        html.style.fontSize = `${window.innerWidth / 30.70}%`
    }
})

menuBtn.addEventListener('click', () => {
    toggleMenu()
})
menuCloseBtn.addEventListener('click', () => {
    toggleMenu()
})

let nodes = navbarMenu.childNodes[1].childNodes

nodes.forEach((node) => {
    node.addEventListener('click', () => {
        toggleMenu()
    })
})

function toggleMenu() {
    navbarMenu.classList.toggle('show')
    html.classList.toggle('overflow-hidden')
}