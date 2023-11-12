let cars = [
    { car_name: 'Audi', car_price: '350000' },
    { car_name: 'Suzuki', car_price: '450000' },
    { car_name: 'BMW', car_price: '550000' },
]

function getcars() {
    setTimeout(() => {
        cars.forEach((car) => {
            console.log(car.car_name)

        });
    }, 2000);
}

function createnewcars(newcar) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            cars.push(newcar);// here Realtime wil use/ will API.
            let error = true
            if (!error) {
                resolve("New data insereted successfully")
            }
            else {
                reject("Something went wrong")
            }
        }, 2000)
    })
}
// getcars()
createnewcars({ car_name: 'WV', car_price: '700000' })
// .then (resp => console.log(resp))//New data insereted successfully
.then(getcars)//getcars()
.catch(err => console.log(err))//Something went wrong



