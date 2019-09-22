var BaseHuman = require("./baseHuman"); // we can call baseHuman class from another js file with this code. 
//It can be only used by New Browser.
//Variable name should be same with calling class
/*
module.exports = class Saphiens extends BaseHuman {
   
    constructor(name) {
        super(name)  
        this.type = "Saphien";
        console.log("Saphien Constructor");
    }
    walk() {
        //super.walk();
        console.log("Saphien Walk");
    }
}*/
var BaseHuman = require('./baseHuman');


module.exports = class Saphiens extends BaseHuman
        {
            constructor(name){
                super(name); 
            }
            walk(){
                super.walk();
                console.log("Saphien Walk");
            }

        }