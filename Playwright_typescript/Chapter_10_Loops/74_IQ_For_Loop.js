for (let purnima=0; purnima>10; Purnima++){
    console.log(purnima);
}

// here it wont execute because purnima initialised with 0, condition is purnima>10
//0 is lessthan 10 so it wont execute

// if we change condition to purnima<10 then it will execute because 0 is less than 10

for (let purnima=0; " " ; purnima++){
    console.log(purnima);
}

//Infinite loop because condition is empty and it will always be true
// If inside for loop

for (let purnima=1; purnima<=20; purnima++){
     if(purnima<=10){
        console.log("Purnima is a child");
     }

     else if(purnima>10 && purnima<18){
        console.log("purnima is a teenager");
     }
     else{
        console.log("purnima is adult");        
     }
}

//another example

for (let soumya=0; soumya<18; soumya++) {
  if (soumya>15) {
    console.log("soumya will get iphone");
  }
  else {
    console.log("soumya will get android");
  }

}
