import { Product } from './product';

export class BasketProduct{

    public product:Product;
    public count:number=1;




    constructor(public id:number){

    }
}