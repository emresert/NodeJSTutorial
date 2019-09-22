import Vehicle  from  "./vehicle";

export default class Bike extends Vehicle{
    constructor(){
        super("Bike");
    }
        
    speedUp(){
        super.speedUp(30);
    }
}



 export var speed = 30;
 export var  defaultColor="white";
 export var  absoulteValue = function(modelYear){
        return 3000/modelYear;
    }

