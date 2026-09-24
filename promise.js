//promise in js
// const PromiseW=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('asynic task completed')
//         resolve()
//     },1000)

// })
// PromiseW.then(function(){
//     console.log('Hello world')
// })

//second promise

// const SecondPromise=new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log({username:'Mudassar Hussain',gmail:'mudassarhussain@gmail.com'});
//         resolve()

        
//     },1000)
// })
// SecondPromise.then(function(user){
//     console.log(user)
// })

//APi data using promise

// 
//00p in js
// const User={
//     username:'Mudassar',
//     userslary:30000,
//     UserGetDetails:function(){
//         console.log(`UserName: ${this.username}`)
//     }
// }
// console.log(User.UserGetDetails())
// const SecondUser={
//     userage:20,
//     UserGetAge:function(){
//         console.log(`UserName: ${this.userage}`)
//     }
// }

// const newuser=new SecondUser()
// console.log(newuser)


//prototype

const user={
    username:'Mudassar'
};

const Usermethod={
    login(){
      console.log(`The username is ${this.username}`)
}
}
    
Object.setPrototypeOf(user,Usermethod)
user.login()
