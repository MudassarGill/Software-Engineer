let number = document.querySelector(".number");
const increaseBtn = document.querySelector("#increase");
const decreaseBtn = document.querySelector("#decrease");
const resetBtn = document.querySelector("#reset");

let currentNumber=0;
increaseBtn.addEventListener('click',function(e){
  currentNumber++;
  number.textContent=currentNumber;
})
decreaseBtn.addEventListener('click',function(e){
    currentNumber--;
    number.textContent=currentNumber
})
resetBtn.addEventListener('click',function(e){
    currentNumber=0
    number.textContent=currentNumber
    
})

