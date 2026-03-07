// Factory function
function personMaker(name, age) {
    const person = {
        name: name,
        age: age,
        talk() {
            console.log(`Hi, my name is ${this.name}`);
        },
    };
    return person;
}

let p1 = personMaker("Harshit", 22); // copy
let p2 = personMaker("Doorva", 21); // copy


