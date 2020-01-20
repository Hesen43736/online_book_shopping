export class UserInfo{
    constructor(public username:string,public password:string){

    }
}


export class UserResponse{
public id:number;
public enabled:boolean;
public validated:boolean;
public grants:UserGrant[]=[];
 
}

export class UserGrant{
    public id:number;
    public name:string;
   
}