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

console.log(MyUser['IsLoggedIn']);