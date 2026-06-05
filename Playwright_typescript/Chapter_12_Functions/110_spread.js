function add(x,y,z) {

    return x+y+z;   

}

let numbers= [1,2,4];
add(...numbers); //spread operator, it will spread the elements of the array into individual elements and pass them as arguments to the function. It is also used to spread the properties of an object into individual properties.


let responsecodes = [200, 400, 500];

function haserror(...codes) {
    return codes.some(code => code>400);    //some any value in the array is greater than 400 then it will return true otherwise false.     

}

haserror(...responsecodes); //spread operator, it will spread the elements of the array into individual elements and pass them as arguments to the function. It is also used to spread the properties of an object into individual properties.
