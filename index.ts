import Name from "./components/Name";
import Price from "./components/Price";
import Type from "./components/Type";

let name = new Name();
let price = new Price();
let type = new Type();



interface ProductOptions {
    name: string,
    price: number,
    type?: string
}


export default class Product implements ProductOptions{
    name: Name;
    price: Price;
    type?: Type;

    constructor(name: string, price: number, type: string) {

    }

    getPrice(): number
    {
        return this.price;
    }

    setPrice(newPrice: number): Product
    {
        this.price = newPrice;
        return this;
    }

    saveProduct(): Promise<any> {
        return new Promise( (resolve, reject) => {
            setTimeout(() => {
                return resolve(true);
            }, 1500)
        })
    }
}

let $select = document.querySelector("#dish_type");
let $addProduct = document.querySelector("#addProduct");
$addProduct.addEventListener("click", getNewProduct.bind(this));

function getNewProduct() {
    name.setName(document.querySelector("#menu_name").value);
    price.setPrice(document.querySelector("#dish_price").value);
    type.setType($select.options[$select.selectedIndex].innerText);
    let pr = new Product(name.getName(), price.getPrice(), type.getType());
    console.log(pr);
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