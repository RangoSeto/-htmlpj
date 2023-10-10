const ynbtn = document.querySelector('.ynbtn');
const yntext = document.querySelector('.yntext');
var ume = ["Don't buy any ticket.","You can buy today."];

const nums = document.querySelectorAll('.num');
const rdnbtn = document.querySelector('.rdnbtn');

ynbtn.addEventListener('click',function(){
    var parnum = Math.floor(Math.random() * 2);
    yntext.textContent = ume[parnum];
});


rdnbtn.addEventListener('click',function(){
    var rdnnum = (Math.floor(Math.random() * 200) + 100).toString();
    for(var i = 0; i < 3; i++){
        nums[i].textContent =  rdnnum[i];
    }
});
