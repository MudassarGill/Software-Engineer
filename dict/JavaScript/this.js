const Users={
    username:"John",
    age:30,
    isAdmin:true,
    email:"john@example.com",
    GreetingMassage:function(){
        return `Hello, ${this.username}`;
    }   
}
console.log(Users.GreetingMassage());