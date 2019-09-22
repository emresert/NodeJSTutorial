/*  Method -1-
// other JS file can reach BaseHuman class with this module.exports anymore.
module.exports = class BaseHuman {
    constructor(name) {
        this.name = name;
        this.type = 'HumanBase';
        console.log("Base Constructor");
    }
}
*/
//  Method 2 (Common)
/*
class BaseHuman {
    constructor(name) {
        this.name = name;
        this.type = 'HumanBase';
        console.log("Base Constructor");
    }
}
class Saphiens extends BaseHuman{
    constructor(name){
        super(name);
        this.type = "Saphien";
        console.log("Saphien Constructor");
    }
    walk(){
        console.log("Saphien Walk");
    }
}
module.exports = {
    BaseHuman,
    Saphiens
}*/

module.exports = class BaseHuman {
    constructor(name){
        this.name = name;
        this.type = 'HumanBase';
    }
    walk(){
        console.log("Base Walk");
    }
}
