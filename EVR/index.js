//menu

const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');
const close = document.querySelector('.close');

menu.addEventListener('click', function () {
    nav.classList.add('flex');
    close.style.display = 'block';
})

close.addEventListener('click', function () {
    nav.classList.add('none');
    nav.classList.remove('flex')
    this.style.display = 'none';
})

document.addEventListener("DOMContentLoaded", function(event)
{
    window.onresize = function() {
        if (window.screen.width > 1200) {
            nav.classList.remove('none');
    }
    };
});

//форма (ФЛ и ЮЛ)
const natural = document.querySelector('#natural');
const legal = document.querySelector('#legal');
const company = document.querySelector('#company');
const legal1 = document.querySelector('.legal');
const natural1 = document.querySelector('.natural');

natural.addEventListener('click', function () {
    if (natural.checked == true) {
        company.style.display = 'none';
        natural1.classList.add('active-form');
        legal1.classList.remove('active-form');
    }
})

legal.addEventListener('click', function () {
     if (legal.checked == true) {
         company.style.display = 'block';
         legal1.classList.add('active-form');
         natural1.classList.remove('active-form');
    }
})

//catalogue
let catalogue = document.querySelectorAll('.catalogue__item');
let common = document.querySelectorAll('.common');

for (let z = 0; z < common.length; z++) {
    catalogue[z].addEventListener('click', function () {
            for (let t = 0; t < common.length; t++) {
                common[t].style.display = 'none';
                catalogue[t].classList.remove('active-cat');
            }
            common[z].style.display = 'block';
            catalogue[z].classList.add('active-cat');
    })

}



//premium
let premium = document.querySelectorAll('.premium__item');
let female = document.querySelector('.premium__female');
let male = document.querySelector('.premium__male');

for (let x = 0; x < premium.length; x++) {
    premium[x].addEventListener('click', function () {

        if (x == 0) {
            female.style.display = 'block';
            male.style.display = 'none';
            premium[0].classList.add('active-premium');
            premium[1].classList.remove('active-premium');
        } else {
            male.style.display = 'block';
            female.style.display = 'none';
            premium[1].classList.add('active-premium');
            premium[0].classList.remove('active-premium');
        }
    })

}

let card = document.querySelectorAll('.card__item');
let femalec = document.querySelector('.card__female');
let malec = document.querySelector('.card__male');

for (let m = 0; m < card.length; m++) {
    card[m].addEventListener('click', function () {

        if (m == 0) {
            femalec.style.display = 'block';
            malec.style.display = 'none';
            card[0].classList.add('active-premium');
            card[1].classList.remove('active-premium');
        } else {
            malec.style.display = 'block';
            femalec.style.display = 'none';
            card[1].classList.add('active-premium');
            card[0].classList.remove('active-premium');
        }
    })

}

//female
document.addEventListener("DOMContentLoaded", function(event) {
   let images = document.querySelectorAll('.premium .female__img');

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', function () {
        let clone = images[i].cloneNode();
        let parent = images[i].parentElement;

        if (parent.children.length < 3) {
            images[i].parentElement.appendChild(clone);
            clone.classList.add('show');
        }

        clone.addEventListener('click', function () {
            this.remove();
        })

    })
}
});

//male
document.addEventListener("DOMContentLoaded", function(event) {
   let imag = document.querySelectorAll('.premium .male__img');

for (let i = 0; i < imag.length; i++) {
    imag[i].addEventListener('click', function () {
        let clone1 = imag[i].cloneNode();
        let parent = imag[i].parentElement;

        if (parent.children.length < 3) {
            imag[i].parentElement.appendChild(clone1);
            clone1.classList.add('show');
        }

        clone1.addEventListener('click', function () {
            this.remove();
        })

    })
}
});

//calculation
//табы
let citem = document.querySelectorAll('.citem');
let ccontent = document.querySelectorAll('.citem-content');

ccontent[1].style.display = 'none';

for (let p = 0; p < citem.length; p++) {
    citem[p].addEventListener('click', function () {
        for (let q = 0; q < calci.length; q++) {
            ccontent[q].style.display = 'none';
            citem[q].classList.remove('active-citem');
        }

        ccontent[p].style.display = 'block';
        citem[p].classList.add('active-citem');
    })
}

let calci = document.querySelectorAll('.calculation__item');
let calcc = document.querySelectorAll('.calculation__c');

for(let s = 0; s < calci.length; s++) {


    calci[s].addEventListener('click', function () {
        for (let u = 0; u < calci.length; u++) {
        calcc[u].style.display = 'none';
        calci[u].classList.remove('active-calc');
    }

    calcc[s].style.display = 'block';
    calci[s].classList.add('active-calc');
})
}

//Расчеты
let sfield = document.querySelectorAll('.sfield');
let snum = document.querySelectorAll('.snumber');
let sres = document.querySelectorAll('.sres');
let calcsnum = document.querySelector('.calculations__num');
let ffield = document.querySelectorAll('.ffield');
let fnum = document.querySelectorAll('.fnumber');
let fres = document.querySelectorAll('.fres');

sres[0].innerHTML = 1800;
sres[1].innerHTML = 950;
fres[0].innerHTML = 1980;
fres[1].innerHTML = 1050;

if (ccontent[0].style.display = 'block') {
    calcsnum.innerHTML = 2750;
} else {
    calcsnum.innerHTML = 3030;
}

let cfield = document.querySelectorAll('.count__field');
let cnum = document.querySelectorAll('.count__number');
let cres = document.querySelectorAll('.count__res');
let calcnum = document.querySelector('.calculation__num');

let ccres;
let cresc;

cres[0].innerHTML = 300;
cres[1].innerHTML = 300;
calcnum.innerHTML = 600;
cnum[0].innerHTML = 300;
cnum[1].innerHTML = 300;

let cresc1 = 300;
let ccres1 = 300;

//Мелкий опт
cfield[0].addEventListener('change', function () {


    if (Number(cfield[0].value) < 0) {
        cres[0].innerHTML = "-"
    } else if (Number(cfield[0].value) < 40) {
        cnum[0].innerHTML = 300;
        ccres = Number(cfield[0].value) * Number(cnum[0].innerHTML);
        ccres1 = ccres
        cres[0].innerHTML = ccres.toLocaleString();
    } else if (Number(cfield[0].value) >= 40 && Number(cfield[0].value) < 80) {
        cnum[0].innerHTML = 205;
        ccres = Number(cfield[0].value) * Number(cnum[0].innerHTML);
        ccres1 = ccres
        cres[0].innerHTML = ccres.toLocaleString();
    } else if (Number(cfield[0].value) >= 80 && Number(cfield[0].value) < 100) {
        cnum[0].innerHTML = 189;
        ccres = Number(cfield[0].value) * Number(cnum[0].innerHTML);
        ccres1 = ccres
        cres[0].innerHTML = ccres.toLocaleString();
    } else {
        for (let e = 0; e < calci.length; e++) {
            calcc[e].style.display = 'none';
            calci[e].classList.remove('active-calc');
        }
        calcc[1].style.display = 'block';
        calci[1].classList.add('active-calc');

        // sfield[0].value = cfield[0].value;
        cfield[0].value = 1;
    }

    let calcn;

    if (cres[0].innerHTML == "-" || cres[1].innerHTML == "-") {
        calcnum.innerHTML = "-";
    } else{
        calcn = Number(cresc1) + Number(ccres1);
        calcnum.innerHTML = calcn.toLocaleString();

    }
})

cfield[1].addEventListener('change', function () {



    if (Number(cfield[1].value) < 0) {
        cres[1].innerHTML = "-"
    } else if (Number(cfield[1].value) < 40) {
        cnum[1].innerHTML = 300;
        cresc = Number(cfield[1].value) * Number(cnum[1].innerHTML);
        cresc1 = cresc
        cres[1].innerHTML = cresc.toLocaleString();
    } else if (Number(cfield[1].value) >= 40 && Number(cfield[1].value) < 80) {
        cnum[1].innerHTML = 105;
        cresc = Number(cfield[1].value) * Number(cnum[1].innerHTML);
        cresc1 = cresc
        cres[1].innerHTML = cresc.toLocaleString();
    } else if (Number(cfield[1].value) >= 80 && Number(cfield[1].value) < 100) {
        cnum[1].innerHTML = 100;
        cresc = Number(cfield[1].value) * Number(cnum[1].innerHTML);
        cresc1 = cresc
        cres[1].innerHTML = cresc.toLocaleString();
    } else {
         for (let e = 0; e < calci.length; e++) {
            calcc[e].style.display = 'none';
            calci[e].classList.remove('active-calc');
        }
        calcc[1].style.display = 'block';
        calci[1].classList.add('active-calc');

    //    sfield[1].value = cfield[1].value;
        cfield[1].value = 1;
    }


    let calcn;

    if (cres[0].innerHTML == "-" || cres[1].innerHTML == "-") {
        calcnum.innerHTML = "-";
    } else {
        calcn = Number(cresc1) + Number(ccres1);
        calcnum.innerHTML = calcn.toLocaleString();
    }

})

//Крупный опт (без ндс)
let ssres;
let sress;

let sress1 = 950;
let ssres1 = 1800;

sfield[0].addEventListener('change', function () {


    if (Number(sfield[0].value) < 100) {
       for (let e = 0; e < calci.length; e++) {
            calcc[e].style.display = 'none';
            calci[e].classList.remove('active-calc');
        }
        calcc[0].style.display = 'block';
        calci[0].classList.add('active-calc');

        // cfield[0].value = sfield[0].value;
        sfield[0].value = 100;

    } else if (Number(sfield[0].value) < 200) {
        snum[0].innerHTML = 180;
        ssres = Number(sfield[0].value) * Number(snum[0].innerHTML);
        ssres1 = ssres
        sres[0].innerHTML = ssres.toLocaleString();
    } else if (Number(sfield[0].value) >= 200 && Number(sfield[0].value) < 500) {
        snum[0].innerHTML = 174
        ssres = Number(sfield[0].value) * Number(snum[0].innerHTML);
        ssres1 = ssres
        sres[0].innerHTML = ssres.toLocaleString();
    } else if (Number(sfield[0].value) >= 500 && Number(sfield[0].value) < 1000) {
        snum[0].innerHTML = 169
        ssres = Number(sfield[0].value) * Number(snum[0].innerHTML);
        ssres1 = ssres
        sres[0].innerHTML = ssres.toLocaleString();
    } else if (Number(sfield[0].value) >= 1000) {
        snum[0].innerHTML = 160
        ssres = Number(sfield[0].value) * Number(snum[0].innerHTML);
        ssres1 = ssres
        sres[0].innerHTML = ssres.toLocaleString();
    }

    let calcn;

    if (sres[0].innerHTML == "-" || sres[1].innerHTML == "-") {
        calcnum.innerHTML = "-";
    } else{
        calcn = Number(sress1) + Number(ssres1);
        calcsnum.innerHTML = calcn.toLocaleString();

    }
})

sfield[1].addEventListener('change', function () {

    if (Number(sfield[1].value) < 100) {
        for (let e = 0; e < calci.length; e++) {
            calcc[e].style.display = 'none';
            calci[e].classList.remove('active-calc');
        }
        calcc[0].style.display = 'block';
        calci[0].classList.add('active-calc');
        // cfield[1].value = sfield[1].value;
        sfield[1].value = 100;


    } else if (Number(sfield[1].value) < 200) {
        snum[1].innerHTML = 95;
        sress = Number(sfield[1].value) * Number(snum[1].innerHTML);
        sress1 = sress
        sres[1].innerHTML = sress.toLocaleString();
    } else if (Number(sfield[1].value) >= 200 && Number(sfield[1].value) < 500) {
        snum[1].innerHTML = 90;
        sress = Number(sfield[1].value) * Number(snum[1].innerHTML);
        sress1 = sress
        sres[1].innerHTML = sress.toLocaleString();
    } else if (Number(sfield[1].value) >= 500 && Number(sfield[1].value) < 1000) {
        snum[1].innerHTML = 85;
        sress = Number(sfield[1].value) * Number(snum[1].innerHTML);
        sress1 = sress
        sres[1].innerHTML = sress.toLocaleString();
    } else if (Number(sfield[1].value) >= 1000) {
        snum[1].innerHTML = 80;
        sress = Number(sfield[1].value) * Number(snum[1].innerHTML);
        sress1 = sress
        sres[1].innerHTML = sress.toLocaleString();
    }


    let calcn;

    if (sres[0].innerHTML == "-" || sres[1].innerHTML == "-") {
        calcnum.innerHTML = "-";
    } else {
        calcn = Number(sress1) + Number(ssres1);
        calcsnum.innerHTML = calcn.toLocaleString();
    }

})

//Крупный опт (с ндс)
let ffres;
let fresf;

let fresf1 = 950;
let ffres1 = 1800;

ffield[0].addEventListener('change', function () {


    if (Number(ffield[0].value) < 100) {
       for (let e = 0; e < calci.length; e++) {
            calcc[e].style.display = 'none';
            calci[e].classList.remove('active-calc');
        }
        calcc[0].style.display = 'block';
        calci[0].classList.add('active-calc');

        // cfield[0].value = ffield[0].value;
        ffield[0].value = 100;

    } else if (Number(ffield[0].value) < 200) {
        fnum[0].innerHTML = 198;
        ffres = Number(ffield[0].value) * Number(fnum[0].innerHTML);
        ffres1 = ffres
        fres[0].innerHTML = ffres.toLocaleString();
    } else if (Number(ffield[0].value) >= 200 && Number(ffield[0].value) < 500) {
        fnum[0].innerHTML = 192;
        ffres = Number(ffield[0].value) * Number(fnum[0].innerHTML);
        ffres1 = ffres
        fres[0].innerHTML = ffres.toLocaleString();
    } else if (Number(ffield[0].value) >= 500 && Number(ffield[0].value) < 1000) {
        fnum[0].innerHTML = 186;
        ffres = Number(ffield[0].value) * Number(fnum[0].innerHTML);
        ffres1 = ffres
        fres[0].innerHTML = ffres.toLocaleString();
    } else if (Number(ffield[0].value) >= 1000) {
        fnum[0].innerHTML = 177;
        ffres = Number(ffield[0].value) * Number(fnum[0].innerHTML);
        ffres1 = ffres
        fres[0].innerHTML = ffres.toLocaleString();
    }

    let calcn;

    if (fres[0].innerHTML == "-" || fres[1].innerHTML == "-") {
        calcnum.innerHTML = "-";
    } else{
        calcn = Number(fresf1) + Number(ffres1);
        calcsnum.innerHTML = calcn.toLocaleString();

    }
})

ffield[1].addEventListener('change', function () {



    if (Number(sfield[1].value) < 100) {
        for (let e = 0; e < calci.length; e++) {
            calcc[e].style.display = 'none';
            calci[e].classList.remove('active-calc');
        }
        calcc[0].style.display = 'block';
        calci[0].classList.add('active-calc');
        // cfield[1].value = ffield[1].value;
        ffield[1].value = 100;

    } else if (Number(ffield[1].value) < 200) {
        fnum[1].innerHTML = 105;
        fresf = Number(ffield[1].value) * Number(fnum[1].innerHTML);
        fresf1 = fresf
        fres[1].innerHTML = fresf.toLocaleString();
    } else if (Number(ffield[1].value) >= 200 && Number(ffield[1].value) < 500) {
        fnum[1].innerHTML = 99;
        fresf = Number(ffield[1].value) * Number(fnum[1].innerHTML);
        fresf1 = fresf
        fres[1].innerHTML = fresf.toLocaleString();
    } else if (Number(ffield[1].value) >= 500 && Number(ffield[1].value) < 1000) {
        fnum[1].innerHTML = 95;
        fresf = Number(ffield[1].value) * Number(fnum[1].innerHTML);
        fresf1 = fresf
        fres[1].innerHTML = fresf.toLocaleString();
    } else if (Number(ffield[1].value) >= 1000) {
        fnum[1].innerHTML = 88;
        fresf = Number(ffield[1].value) * Number(fnum[1].innerHTML);
        fresf1 = fresf
        fres[1].innerHTML = fresf.toLocaleString();
    }


    let calcn;

    if (fres[0].innerHTML == "-" || fres[1].innerHTML == "-") {
        calcnum.innerHTML = "-";
    } else {
        calcn = Number(sress1) + Number(ssres1);
        calcsnum.innerHTML = calcn.toLocaleString();
    }

})
