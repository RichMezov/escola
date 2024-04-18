const lista = document.querySelector('form');
const btnSub = document.getElementById('btn');


var arr = document.getElementsByClassName('funcional');
var arr2 = document.getElementsByClassName('nfuncional');
var subt = document.getElementsByClassName('total');

for(var i=0;i<arr.length;i++){
  arr[i].value=0;
  arr2[i].value = 0;
}



btnSub.addEventListener ('click',(event) => {
    event.preventDefault();
    var tot=0;

    for(var i=0;i<arr.length;i++){

        tot = parseFloat(arr[i].value) + parseFloat(arr2[i].value);
        subt[i].value = tot;
    }
})






