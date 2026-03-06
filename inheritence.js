// extends keyword is used to inherent properties of base class. 
// super(param) keyword is used to call the constructor of base class.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`Hi, I am ${this.name}`);
    }
}

class Student extends Person{
    constructor(name, age, marks) {
        super(name, age);
        this.marks = marks;
    }
    // Function overriding.
    talk() {
        console.log(`Hi, I am ${this.name} and i am a Student.`);
    }
}

class Teacher extends Person{
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
    // Function overriding.
    talk() {
        console.log(`Hi, I am ${this.name} and i am a Teacher.`);
    }
}

let stu1 = new Student("Harshit", 22, 83);
let stu2 = new Student("Doorva", 21, 87);

