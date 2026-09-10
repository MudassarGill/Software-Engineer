const AllBtnSelector = document.querySelectorAll('.button');
const Bodyselector=document.querySelector('body')
for (let i = 0; i < AllBtnSelector.length; i++) {
    AllBtnSelector[i].addEventListener('click', function () {
        Bodyselector.style.backgroundColor = AllBtnSelector[i].innerHTML;
    })