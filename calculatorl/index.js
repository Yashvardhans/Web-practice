  
var num = Math.random()
var l_num = Math.round(num*100) 

var element = document.querySelector('.popup');

const btn = document.getElementById('calculate'); 

var out1 = document.getElementById('l_perc');

function percentage(){
    
    element.classList.add('open-pop');
    out1.innerHTML = l_num  +"%";
   
    
}








