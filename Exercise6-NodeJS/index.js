import car from  "./car"
import bike from "./bike" 
import {absouluteValue} from "./car"

var Toyota = new car();

Toyota.printType();
Toyota.printSpeed();
Toyota.speedUp();
Toyota.printSpeed();

console.log("Absoulute Value of Year : "+ absouluteValue(100));

// for method 2

var BMX =new bike();
BMX.printType();
BMX.printSpeed();
BMX.speedUp();
BMX.printSpeed();