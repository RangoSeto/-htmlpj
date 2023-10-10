// Start Header Section 
var navbuttons = document.querySelector('.navbuttons');

navbuttons.addEventListener('click',function(){
    navbuttons.classList.toggle('crossxs');
});

// End Header Section 

// Start Schedule Section 

var schtexts = document.querySelectorAll('.sche-texts');
var idx = 0;

schtexts[0].classList.add('move');

function idxcheck(num){
    
    if(num < 0){
        idx = 1;
    }else if(num > 1){
        idx = 0;
    }

}

setInterval(function(){
    idx++;
    idxcheck(idx);
    schmove(idx);
},3000);

function schbtn(number){
    idx+=number;
    idxcheck(idx);

    schmove(idx);
}

function schmove(idx){
    schtexts.forEach(function(schtext){
        schtext.classList.remove('move');
    });

    schtexts[idx].classList.add('move');
}

// End Schedule Section 

// Start Gallery Section 
var galimgs = document.querySelectorAll('.gal-items img');

galimgs.forEach(galimg => {
    galimg. classList.remove('imghov');

    galimg.addEventListener('mouseover',function(){
        galimg.classList.add('imghov');
    });
    galimg.addEventListener('mouseout',function(){
        galimg. classList.remove('imghov');
    });
});

// End Gallery Section 

// Start Footer Section 
var getyear = document.querySelector('.getyear');

var getfullyear = new Date().getUTCFullYear();
getyear.textContent = getfullyear;
// End Footer Section 


