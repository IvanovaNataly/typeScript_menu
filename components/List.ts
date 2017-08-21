let userTestStatus: { name: string, price: number, type?: string }[];


export default class List implements userTestStatus{
    _products: userTestStatus;

    constructor(products: userTestStatus) {
        this._products = products;
    }

    render() {
        let list = this._products.map(product: => {
            `
             <li class="collection-item">
                 <span class="badge blue">${product: price}</span>
                 <span class="new badge red"></span>Alan></li>
           
            
            `

        })
    }
}