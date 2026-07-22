class UserAccount{
    public username : string;
    private password : string;

    constructor(username:string, password:string){
        this.username = username;
        this.password = password;
    }

    public changePassword(oldPassword:string,newPassword:string){
        if(oldPassword === this.password){
            this.password = newPassword;
            console.log("OldPassword is "+ oldPassword +", New password is "+this.password+".")
        }else{
            console.log("Wrong password.");
        }
    }
}

const user1 = new UserAccount("P","1234");
user1.changePassword("1234","4321");