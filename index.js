const cards = document.querySelector('#vehicleCardBox');
const loadMoreButton = document.querySelector('#loadMoreButton');

var names = [
    "Экскаватор-погрузчик",
    "Самосвал",
    "Кран-манипулятор",
    "Автобетоносмеситель",
    "Бетононасос",
    "Бульдозер"

];

loadMoreButton.addEventListener('click', () => {

    if (loadMoreButton.classList.contains('loadmore')) {
        names = [...names, ...names]
        renderVehicleCards(names)
        loadMoreButton.classList.toggle('loadmore')
        console.log(names)
    } else {
        names.length = 6;
        renderVehicleCards(names)
        loadMoreButton.classList.toggle('loadmore')
    }
})

function renderVehicleCards(names) {
    cards.innerHTML = names.map((name, index) => {
        if (index > 5) index -= 6
        return `
        <div class="vehicle-card">
        <div class="vehicle-name">
            <span>${name}</span>
        </div>
        <div class="card-img">
            <img src="./images/vehicle-${index + 1}.png" alt="vehicle">
        </div>
        </div>
        `
    }).join(' ')
}

renderVehicleCards(names)