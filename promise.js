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

const UserData=new Promise(function(resolve,reject){
    setTimeout(function(data){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(function(response) {
                return response.json()
            })
            .then(function(data) {
                resolve(data)
            })
            .catch(function(error) {
                reject(error)
            })
    },2000)
})
 UserData.then(function(data) {
    console.log(data)
})
.catch(function(error) {
    console.log(error)
})
