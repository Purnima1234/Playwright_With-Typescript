//we have 3  roles to login, editor, admin, viewer

let isloggedin= true;
let userrole= "editor";

if (isloggedin){
    if(userrole==="editor"){
        console.log("editor has all the access");
    }
    else if(userrole==="admin"){
        console.log("admin has all the access");
    }
    else if(userrole==="viewer"){
        console.log("viewer has limited access");
    }
}

else{
    console.log("user not logged in");

}