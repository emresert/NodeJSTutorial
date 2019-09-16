// Defining class
class OutOfContext {
    constructor() {
        // objects in class should be here.
        this.name = "Emre";
        this.age = 27;
        this.color = "Black";
    }

//  if there is an event in JS Scope , JS mixes working logic. Therefore , arrow function is used.   
//   => (Arrow function)   provides that code works  properly in scope or scopes 

//  => function  Usage in ES6
    showMeData( /*param1,param2*/){
        setTimeout(() => {
           this.printData(); 
        }, 3000);
    }


    printData() {
        console.log("Name :" + this.name);
        console.log("Ade :" + this.name);
        console.log("Color :" + this.color);
    }
}

var object = new OutOfContext();
object.showMeData();