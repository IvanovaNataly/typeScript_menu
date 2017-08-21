let data = "products";

export default class ProductsService {
	sendToLocalStorage(products) {
		return localStorage.setItem(data, JSON.stringify(products));
	}

	getFromLocalStorage() {
		return JSON.parse(localStorage.getItem(data));
	}
}

