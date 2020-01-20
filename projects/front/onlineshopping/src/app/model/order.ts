import { CustomerPageComponent } from '../component/customer-page/customer-page.component';
import { Customer } from './customer';
import { BasketProduct } from './basket';

export class OrderModel{
public customer:Customer=new Customer(0);
public note:string;
public basketProducts:BasketProduct[]=[];
public totalPrice:number;
public register:Date=new Date();





    constructor(public id:number){

    }
}