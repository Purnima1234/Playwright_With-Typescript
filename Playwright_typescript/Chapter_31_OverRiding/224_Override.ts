class BaseTest {
    honey_ready(): void{
        console.log("Honey is sweet");

    } honey_Is_donne(): void{
        
    console.log("Honey is done");
}
    }
   class loginTest extends BaseTest {
    override honey_ready():void {
        console.log("Honey is ready in login test");
        console.log ("Honey is sweet");
    }
    }



    class logintest extends BaseTest {
        override honey_Is_donne(): void {
            console.log("Honey is done in login test");

    }}

    let test1=new loginTest();
    test1.honey_ready();
    let test2=new logintest();
    test2.honey_Is_donne();