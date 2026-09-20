//promise in js
const PromiseW=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('asynic task completed')
        resolve()
    })

})
PromiseW.then(function(){
    console.log('Hello world')
})