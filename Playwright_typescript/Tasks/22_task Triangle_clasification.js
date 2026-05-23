 //Triangle classifier - Task 1
 let sideA=40;
 let sideB=90;
 let sideC=40;
 ``

 if(sideA===sideB && sideB===sideC){
    console.log("Equilateral triangle");
 } else if( (sideA===sideB && sideB!=sideC)||(sideA===sideC && sideC!=sideB)||(sideB===sideC && sideC !=sideA)){
    console.log("Isosceles triangle");
 } else {
    console.log("Scalene triangle");
 }
 

