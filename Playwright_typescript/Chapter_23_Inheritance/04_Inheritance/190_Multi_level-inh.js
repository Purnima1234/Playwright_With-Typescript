class BasePage {
    constructor(name) {
        this.name=name;
    }
    open() {
        console.log(`Opening the ${this.name} page`);
    }
}
class authpage extends BasePage {
    login(user) {
        console.log(`Logging in ${user} in the ${this.name} page`);
    }

}
class dashboardpage extends authpage {
    verify() {
        console.log(`Verifying the ${this.name} page`);
    }
}
let admin = new dashboardpage("Admin");
admin.open();
admin.login("AdminUser");
admin.verify();
