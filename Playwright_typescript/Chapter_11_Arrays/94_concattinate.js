let x=[1,2,3];
let y=[4,5,6];
let c = x.concat(y);
console.log(c);

//spread
let x=[1,2,3];
let y=[4,5,6];

z= [...x,...y];
console.log(z); 

//3 dots means all the elements of the array will be added to the new array, it is called spread operator. It is more modern and cleaner way to concatenate arrays.


//join
let x=[1,2,3];
let y=[4,5,6];

let g= x.join(",") + "," + y.join(",");
console.log(g);


