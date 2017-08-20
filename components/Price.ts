export default class Price {
    private _price: number;

    getPrice(): number{
        return this._price;
    }

    setPrice(newPrice: number) {
        (newPrice > 0 ) ? this._price = newPrice : this._price = 1;
    }
}
