

export class ItemsTotalCount {
    constructor(public items){
    }
     get totalcount() {
       let count = 0;
        for(let item in this.items){
             count += this.items[item].quantity;
        }
        return count;
    }
    
    get totalprice() {
        let totalprice = 0;
        for(let item in this.items) {
            totalprice += this.items[item].product.price * this.items[item].quantity;
        }
        return totalprice;
    }
}

