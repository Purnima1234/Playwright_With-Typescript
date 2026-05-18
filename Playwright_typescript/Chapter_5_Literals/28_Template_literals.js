let firstname="Purnima"
 let fullname= `hi ${firstname} varre`   // template literal with interpolation
 console.log(fullname) // hi Purnima varre

 let env = "staging";
 env="production"
 const userid=12345;
 const apiurl=`https://${env}.api.com/user/${userid}`
 console.log(apiurl) ;// https://production.api.com/user/12345


 //playwright

 const rowindex=3;
 const columnname="email";
 await pageXOffset.locator(`.table tr:nth-child(${rowindex}) td.${columnname}`).textContent();


 //logs
 const testName="Login test"
 const status="passed"
 const duration=1200
 console.log(`Test: ${testName} - Status: ${status} - Duration: ${duration}ms`) // Test: Login test - Status: passed - Duration: 1200ms
 