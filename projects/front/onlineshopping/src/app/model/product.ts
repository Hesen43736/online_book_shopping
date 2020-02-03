import { Category } from './category';

export class Product{

public name:string;
public categoryId:number;
public price:number;

public image:string;
public email:string;
public cityId:number;
public description:string;
public ownerName:string;
public phone:string;
public register:Date;
public userId:number;
public pageCount:number;

    constructor(public  id:number){
        
    }
   

}

export class City{
    public name:string;
    
    constructor(public id:number){

    }
}