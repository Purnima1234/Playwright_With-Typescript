class Basepage {
    verify(){
        console.log("Verify Basepage");

    }
}

class loginpage extends Basepage {
    verify(){
        console.log("Verify loginpage");
    }
}

class dashboardpage extends Basepage{
    verify(){
        console.log("Verify Dashboardpage");
    }
}

class cartpage extends Basepage {
    verify(){
        console.log("Verify Cartpage");
    }
}

let pages= [new loginpage(), new dashboardpage(), new cartpage()];

pages.forEach(function(page){
    page.verify()
    console.log ("---------")

});