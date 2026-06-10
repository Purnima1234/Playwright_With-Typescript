let testmatrix=[
     ["login", "passwprd", 200],
     ["checkout", "fail", 400],
     ["search", "pass", 200]

]

//how many TC executed
//How amny are passed
//what is the status code that you have got for the fail?

for(let i=0; i<testmatrix.length; i++) {
    for(let j=0; j<testmatrix[i].length; j++) {
        console.log(testmatrix[i][j]);
    }
}