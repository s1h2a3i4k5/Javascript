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
            if (error) {
                resolve("New data insereted successfully")
            }
            else {
                reject("Something went wrong")
            }
        }, 2000)
    })
}

async function myfun(){
    await createnewcars({ car_name: 'WV', car_price: '700000' });
    getcars()
}
myfun()

async function user(){
    let resp = await fetch('https://jsonplaceholder.typicode.com/users')
    // console.log(resp)//data will come in the form of promises response so to convert this response let data
    let data = await resp.json()
    console.log(data)
}
user()

// we can use promises with Asyn and await