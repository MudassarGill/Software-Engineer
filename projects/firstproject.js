const AllBtnSelector = document.querySelectorAll('.button');
const Bodyselector = document.querySelector('body');



for (let i = 0; i < AllBtnSelector.length; i++) {
    AllBtnSelector[i].addEventListener('click', function (event) {
        if (event.target.id === 'btn1') {
            Bodyselector.style.backgroundColor = 'red';
        }
        else if (event.target.id === 'btn2') {
            Bodyselector.style.backgroundColor = 'blue';
        }
        else if (event.target.id === 'btn3') {
            Bodyselector.style.backgroundColor = 'green';
        }
        else if (event.target.id === 'btn4') {
            Bodyselector.style.backgroundColor = 'yellow';
        }

    })
}

// AllBtnSelector.forEach(function (button) {
//     button.addEventListener('click', function (event) {

//         if (event.target.id === 'btn1') {
//             Bodyselector.style.backgroundColor = 'red';
//         }
//         else if (event.target.id === 'btn2') {
//             Bodyselector.style.backgroundColor = 'blue';
//         }
//         else if (event.target.id === 'btn3') {
//             Bodyselector.style.backgroundColor = 'green';
//         }
//         else if (event.target.id === 'btn4') {
//             Bodyselector.style.backgroundColor = 'yellow';
//         }

//     });
// });