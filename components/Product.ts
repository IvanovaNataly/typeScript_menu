
interface ProductOptions {
    _name: string,
    _price: number,
    _type?: string
}

export default class Product implements ProductOptions{
    _name: string;
    _price: number;
    _type?: string;

    constructor(name: string, price: number, type: string) {
        this._name = name;
        this._price = price;
        this._type = type;
    }

    getName(): string
    {
        return this._name;
    }

    getPrice(): number
    {
        return this._price;
    }

}




// // class Person {
// //     name: string;
// //     age: number;
// //     constructor(name: string, age: number) {
// //         this.name = name;
// //         this.age = age;
// //     }
// //
// //     greet() {
// //         console.log("Hi, I am " + this.name)
// //     }
// // }
// //
// // var person = new Person("Jack", 29);
// //
// // person.greet();
//
//