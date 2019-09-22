var Vehicle = require("./vehicle");

import Vehicle from  './vehicle';

export default class Car extends Vehicle{
    constructor(){
        super("Car");
    }
        
    speedUp(){
        super.speedUp(60);
    }
} // class and function of class to export

export var speed= 60; //  Variable to export
export var defaultColor="Red"; //  String to export
export var absouluteValue = function(modelYear){
return 23000/modelYear;
} //  Funtion to export
 
