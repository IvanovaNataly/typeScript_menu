import Name from "./components/Name";
import Price from "./components/Price";
import Type from "./components/Type";
import Product from "./components/Product";
import ProductsService from "./services/Service";

let nameIns = new Name();
let priceIns = new Price();
let typeIns = new Type();
let service  =  new ProductsService();



let $select = document.querySelector("#dish_type");
let $addProduct = document.querySelector("#addProduct");
$addProduct.addEventListener("click", getNewProduct.bind(this));

function getNewProduct() {
	nameIns.setName(document.querySelector("#menu_name").value);
	priceIns.setPrice(document.querySelector("#dish_price").value);
	typeIns.setType($select.options[$select.selectedIndex].innerText);
	let pr = new Product(nameIns.getName(), priceIns.getPrice(), typeIns.getType());

	let products = service.getFromLocalStorage() || [];
	products.push(pr);
	console.log("Array ", products);
	service.sendToLocalStorage(products);
	console.log(service.getFromLocalStorage());
}

