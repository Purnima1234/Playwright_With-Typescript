console .log(App_vwo_com);

console.log("X")

if (true) {

}

//now initialising the variable for app.vwo.com
const App_vwo_com = "https`://app.vwo.com/";
//In the above code, we are trying to access the variable 'App_vwo_com' before it is declared. Since 'App_vwo_com' is declared with const, it is not hoisted and will throw a ReferenceError. If we were to declare 'App_vwo_com' with var instead of const, it would be hoisted and would return undefined instead of throwing an error.

//Temporarly dead Zone (TDZ) is a behavior in JavaScript where variables declared with let and const are not accessible before they are declared. This means that if you try to access a variable before it is declared, you will get a ReferenceError. This is different from var, which is hoisted and can be accessed before it is declared, returning undefined. The TDZ helps to prevent bugs and makes the code more predictable by ensuring that variables are only accessible after they have been declared.