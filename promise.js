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
const User={
    username:'Mudassar',
    LoggedIn:ture,
    userslary:30000,
    UserGetDetails:function(){
        console.log('This is user detalis...')
    }
}
