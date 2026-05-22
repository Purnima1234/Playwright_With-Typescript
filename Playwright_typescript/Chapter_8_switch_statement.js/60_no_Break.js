let day=2;

switch (day){
    case 1: 
       console.log("Monday");
       
    case 2: 
       console.log("Tuesday");
      
    case 3: 
       console.log("Wednesday");
     
    case 4: 
       console.log("Thursday");
      
    case 5: 
       console.log("Friday");
       
    case 6: 
       console.log("Saturday");
     
    case 7: 
       console.log("Sunday");
    
}

//no break executes all the cases after the matched case until it finds a break statement or reaches the end of the switch statement. In this example, since there are no break statements, when day is 2, it will print "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", and "Sunday".