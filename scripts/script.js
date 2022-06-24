const drinksMenu = document.getElementById('drinks');

let drinks = [];

const downloadCsv = async () => {
    try {
        const target = `/data/drinks.json`; //file

        const res = await fetch(target);

        if (res.status === 200) {

            const data = await res.json();
            drinks = data;

            CreateDrinks();

        } else {
            console.log(`Error code ${res.status}`);
        }
    } catch (err) {
        console.log(err)
    }
}
downloadCsv();


function CreateDrinks() {
    [...drinks].forEach((drink, index) => {

        const listItem = document.createElement('div');

        listItem.classList.add('col-lg-3', 'col-md-4', 'col-xs-12', 'm-4', 'flex-grow-1');
        listItem.innerHTML = `
        <div class="card">
        <div class="card-body">
            <h5 class="card-title">${drink['name']}</h5>
            <p class="card-text">${drink['ingredients']}, ${drink['toppings'].toLowerCase()}</p>

            <p>
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample${index}"
                    role="button" aria-expanded="false" aria-controls="collapseExample">
                    Notes
                </a>
            </p>
            <div class="collapse" id="collapseExample${index}" aria-expanded="false">
            ${drink['notes']}
            </div>
        </div>
    </div>`

        drinksMenu.appendChild(listItem);
    });
}