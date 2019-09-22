function doSomeNetwork(){
   
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            console.log("Promise return ediyor"); //3
            resolve({
                result:"success"
            });
        },3000)
    });
}

async function networkCaller(){
    console.log("Before Promise Call"); // 1
    var retVal = await doSomeNetwork();
    console.log("After promise"); //4
}

networkCaller();
console.log("Are we waiting?");//2