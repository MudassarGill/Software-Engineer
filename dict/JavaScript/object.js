//object
const mySym=Symbol("mySymbol");
const MyUser={
    name:"John",
    age:30,
    isAdmin:true,
    email:"mudassar@google.com",
    IsLoggedIn:["Monday","Tuesday","Wednesday"],
    [mySym]:"mySymbolValue"
}

// console.log(MyUser['IsLoggedIn']);
// console.log(MyUser);
const MynewUser={
    name:"Mudassar",
    age:25,
    isAdmin:false,
    email:"mudassar@outlook.com",
    greeting:function(){
        return `Hello, ${this.name}`;
    },
    userName:{
        userfullname:{
            firstName:"Mudassar",
            lastName:"Hussain"
        }
    }
}

console.log(MynewUser.greeting());