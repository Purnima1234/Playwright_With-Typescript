const user ={
    name: "Purnima",
    age: 30,
    city: "Hyderabad"
}

console.log(user);
console.log(user.name);
console.log(user["age"]);

//objects are dynamic in nature. We can add new properties and methods to an object after it is created.

const key="age";

console.log(user[key]);


//adding Modifying properties of an object
user.city="Bangalore"; //modifying the city property of the user object

console.log(user.city); //output: Bangalore. This is because we have modified the city property of the user object to Bangalore. So, when we try to access the city property, it returns Bangalore because that is the current value of the city property in the user object.   