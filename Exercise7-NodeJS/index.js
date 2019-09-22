function doSomeNetwork(){
    /*
    return new Promise(function(resolve,reject){
        console.log("Promise içinde");//2
        setTimeout(()=>{
            console.log("Promis return ediyor");//5
            resolve({
                result:"success"
            });
        },3000)
    });
    */
    return new Promise(function(resolve,reject){
        console.log("Promise içinde");//2
        setTimeout(()=>{
            console.log("Promis return ediyor");//5
            resolve({
                reject:"fail"
            });
        },3000)
    });
}

console.log("Promise Öncesi");//1
var networkCall = doSomeNetwork();
console.log("promise çağrısı");//3
/* for sucsess
networkCall.then((returnValue) =>{
    console.log("Promis return etti."); //6
});*/

/* for reject */
networkCall.then((returnValue) =>{
    console.log("Promis return etti.").catch((err)=>{
        console.log("Promise fail.");
    });
});

/*  method 2 for catch
networkCall.catch((err) => {
console.log("Promise fail.")
});
*/
 
console.log("Program Sonu"); //4