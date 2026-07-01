enum Role{
    Admin,
    Editor,
    Viewer
}
interface User{
    name: string;
    email: string;
    role: Role;
}
const user: User[] = [
    {name:"Jesus", email:"Jesus@gmail.com", role: 2},
];
function checkAccess(user:User) {
    if(user.role === Role.Admin){
        console.log(`Name: ${user.name}, Hello Master`);
    }else if(user.role === Role.Editor){
        console.log(`Name: ${user.name}, Hello Editor`);
    }else{
        console.log(`Name: ${user.name}, Hello`);
    }
}
const user1: User = {name: "Jesus", email:"Jesus@gmail.com",role:Role.Admin};
const user2: User = {name: "Adam", email:"Adam@gmail.com",role:Role.Editor};
checkAccess(user1);
checkAccess(user2);