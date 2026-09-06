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

// console.log(MynewUser.greeting());

const MyfirstObjectArray=[
    {
        name:"Mudassar",
        age:25,
        isAdmin:false,
        email:"mudassar@outlook.com"
    }
];

const MySecondObjectArray=[
    {
        name:"Ali",
        age:20,
        isAdmin:true,
        email:"ali@outlook.com"
    }
];

myObjectArray=Object.assign({},MyfirstObjectArray,MySecondObjectArray);