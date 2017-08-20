
class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log("Hi, I am " + this.name)
    }
}

var person = new Person("Jack", 29);

person.greet();
