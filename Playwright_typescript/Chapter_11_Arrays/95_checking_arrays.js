let result=Array.isArray([1,2,3]);
console.log(result);
 //is arrayor not

 let result=Array.isArray("hello");
    console.log(result);


    //every and some
   let allAbove75 = [80,87,65].every(s => s>75);
   console.log(allAbove75);

   let someAbove75 = [80,87,65].some(s => s>85);
   console.log(someAbove75);  // atleast one element is above 85