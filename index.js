import { svg } from './svgs.js'
const cards = document.querySelector('#vehicleCardBox');
const loadMoreButton = document.querySelector('#loadMoreButton');
const services = document.querySelector('#servicesCardBox');
const info = document.querySelector('#servicesInfo')



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
        <div></div>
            <img src="./images/vehicle-${index + 1}.webp" alt="vehicle">
        </div>
        </div>
        `
    }).join(' ')
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
}


//execution of above functions
renderServiceInfo(infos)
renderServiceCards(serviceNames)
renderVehicleCards(vehicleNames)