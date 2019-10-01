let stranaA = document.getElementById('stranaA');
let stranaB = document.getElementById('stranaB');
let stranaC = document.getElementById('stranaC');
let objemVypocet = document.getElementById('objemVypocet');
let povrchVypocet = document.getElementById('povrchVypocet');
let button = document.getElementById('button');


function objem(stranaA, stranaB, stranaC){
    if(isNaN(stranaA)) return 'NaN';
    if(isNaN(stranaB)) return 'NaN';
    if(isNaN(stranaC)) return 'NaN';

    if (stranaA<0) stranaA = Math.abs(stranaA);
    if (stranaB<0) stranaB = Math.abs(stranaB);
    if (stranaC<0) stranaC = Math.abs(stranaC);

    return stranaA*stranaB*stranaC;
}

function povrch(stranaA, stranaB, stranaC){
    if(isNaN(stranaA)) return 'NaN';
    if(isNaN(stranaB)) return 'NaN';
    if(isNaN(stranaC)) return 'NaN';

    if (stranaA<0) stranaA = Math.abs(stranaA);
    if (stranaB<0) stranaB = Math.abs(stranaB);
    if (stranaC<0) stranaC = Math.abs(stranaC);

    return 2*(stranaA*stranaB + stranaA*stranaC + stranaB*stranaC);
}

button.addEventListener('click', function(){
    objemVypocet.innerText = objem(stranaA.value, stranaB.value, stranaC.value);
    povrchVypocet.innerText = povrch(stranaA.value, stranaB.value, stranaC.value);
})