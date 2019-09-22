export default class Vehicle {
    constructor(typename){
        this.typename = typename;
        this.speed = 0;
    }
    printType(){
        console.log(this.typename)
    }
    printSpeed(){
        console.log(this.speed)
    }
    speedUp(speed){
        this.speed += speed;
    }
}