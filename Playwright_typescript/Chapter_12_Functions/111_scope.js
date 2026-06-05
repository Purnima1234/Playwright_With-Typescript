let env="staging";
function setupconfig() {
    lettimeout=3000;
    console.log(env);
    console.log(timeout);


}

setupconfig();
console.log(env);
console.log(timeout); // ReferenceError: timeout is not defined
