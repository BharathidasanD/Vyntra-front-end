import { User } from './user';

export class Customer extends User
{
    
    
   /* name:string;
    email:string;
    phone:string;
    address:string;
    pincode:string;
    city:string;*/
    constructor( public user_id:number,public user_password:string,public user_cpassword:string,
        public name:string,
        public email:string,
        public phone:string,
        public address:string,
        public pincode:string,
        public city:string)
        {
           super( user_id, user_password,user_cpassword);
            /*this.name=Name;
            this.email=Email;
            this.phone=Phone;
            this.address=Address;
            this.pincode=Pincode;
            this.city=City;*/
    
        }

}