// Constructors - Doesn't return age anything & start with capital
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.talk = function() {
    console.log(`Hi, my name is ${this.name}`);
}

let p1 = new Person("Harshit", 22);
let p2 = new Person("Doorva", 21);