let scores=[
    [80,90,100],
    [70,60,50],
    [85,95,75]
]
    //sum of row

let rowsums= scores.map( row=> row.reduce((a,b) => a+b,0));



let suitresults=[
["Loging-pass", "register-fail", "logout-pass"], //authsuit
["search -pass", "filter-fail", "sort-pass"], // search suit
["checkout-pass", "payment-fail", "order-pass"]// payment suit

]

//i want all test cases whihc are failed

for( let i=0; i<suitresults.length; i++) {
   for(let j=0; j<suitresults[i].length; j++) {
    if(suitresults[i][j].includes("fail")) {
        console.log(suitresults[i][j])
    }
   }

}