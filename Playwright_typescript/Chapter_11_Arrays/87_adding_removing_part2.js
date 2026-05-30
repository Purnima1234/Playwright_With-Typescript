let arr=[1,2,3,4,5];

//adding end of the array

arr.push(6,7,8);

console.log(arr); // Output: [1, 2, 3, 4, 5, 6, 7, 8]


//splice method to remove elements from the array (replaces the original array with the sliced portion
//Add with out removing existing elements
let arr2=[1,2,3,4,5,6];

arr2.splice(2,0,99); //here 2 is index, , 0 means dont remove, 99 will add as 2nd number and
//others will remain same).
 console.log(arr2)

 /*
 [
  1, 2, 99, 3,
  4, 5,  6
]
    */

//Replace existing elements

let arr3= [9,8,7,6,5,4];

arr3.splice(2,1,99); //here 2 is index, 1 means remove 1 element, 99 will replace the removed element
console.log(arr3); // Output: [9, 8, 99, 6, 5, 4]
//out put [ 9, 8, 99, 6, 5, 4 ]

//Want to replace 2 elements

let arr4=[1,2,3,4,5,6];

arr4.splice(2,2,88,99); //here 2 is index, 2 means remove 2 elements, 88 and 99 will replace the removed elements
console.log(arr4);

//outpu [ 1, 2, 88, 99, 5, 6 ]

