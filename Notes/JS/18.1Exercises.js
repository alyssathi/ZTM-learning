//create two classes, an Animal class and a Mammal class

class Animal {
    constructor(name,type){
        this.name = name;
        this.type = type;
    }
    introduce(){
        console.log(`Hello, my name is ${this.name}! I am a ${this.type}. Nice to meet you!`);
    }
};

class Mammal extends Animal{
    constructor(name,type,color){
        super(name,type);
        this.color = color;
    }
    explain(){
        console.log(`Yes, I know it's crazy that a ${this.color} ${this.type} can talk to you. Get used to it!`);
    }
}

