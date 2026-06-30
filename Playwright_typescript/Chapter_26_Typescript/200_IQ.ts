let responsecode: number[]=[200, 201, 202, 204, 400, 401, 403, 404, 500];
 function getFailedcodes(code:number[]) : number[]{
    return code.filter(function(code:number):boolean{
        return code>=400;
    });
 }
 console.log("all Codes", responsecode);
 console.log("Failed Codes", getFailedcodes(responsecode));
