let order= new Promise (function(resolve, reject) {
    let foodisready = false;

   if(foodisready) {
        resolve("food is ready");
    }

    else {
        reject("food is not ready");
    }


})

console.log(order);
