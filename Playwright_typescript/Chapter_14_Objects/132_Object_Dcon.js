const user ={name: "Purnima", age:30, city:"Hyderabad"};

//Basic dconstructuring of an object
const {name, age, city}=user;

console.log(name); //output: Purnima

console.log(age); //output: 30

console.log(city); //output: Hyderabad  

//dconstruction is uded if i want to use only one or two properties of an object. It is a way to extract the values of the properties of an object and assign them to variables.

//Renaming the variables while dconstructuring
const {name: userName, age: userAge, city: userCity}=user;

console.log(userName); //output: Purnima
console.log(userAge); //output: 30
console.log(userCity); //output: Hyderabad  


//object inside object dconstructuring

const data ={
    user: {
        name: "Purnima",
        address: {
            city: "Hyderabad",
            state: "Telangana"
        }

    }
}

console.log(data.user.name); //output: Purnima
console.log(data.user.address.city); //output: Hyderabad

//object inside object destructuring
const {user: {name, address: {city, state}}} = data;

console.log(name); //output: Purnima
console.log(city); //output: Hyderabad
console.log(state); //output: Telangana