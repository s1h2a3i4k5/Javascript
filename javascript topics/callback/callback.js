// alert("Hey !wecome to javascript")

let cars =[
    {car_name:'Audi',car_price:'350000'},
    {car_name:'Suzuki',car_price:'450000'},
    {car_name:'BMW',car_price:'550000'},
]

function getcars(){
    setTimeout(() =>{
     cars.forEach((car) =>{
        console.log(car.car_name)
        
     });
    },2000);
}

function createnewcars(newcar,callback){
    
    setTimeout(() =>{
     cars.push(newcar)
     callback()//callback=getcars
    // console.log(a)
    },3000);
}
// getcars()
createnewcars({car_name:'WV',car_price:'700000'},getcars)


let get_user = fetch('https://jsonplaceholder.typicode.com/users').then(resp => resp.json());
Promise.all([get_user]).then(values => console.log(values)).catch(err => console.log(err))


// let getuser = fetch('https://jsonplaceholder.typicode.com/users').then(resp => resp.json());
// Promise.all([getuser]).then(values => console.log(values)).catch(err => console.log(err))



// async function myfun(){
//     let get_user = await fetch('https://jsonplaceholder.typicode.com/users');
//     let data = await get_user.json()
//     console.log(data)
// }

// myfun()