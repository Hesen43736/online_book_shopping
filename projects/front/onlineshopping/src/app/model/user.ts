export class UserInfo{
    constructor(public username:string,public password:string){

    }
}


export class UserResponse{
public id:number;
public enabled:boolean;
public validated:boolean;
 
 
}

 

export class User{
    public id:number;
    public username:string;
    public password:number;
    public name:string;
}
