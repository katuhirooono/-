'use strict'

// スクロールイベント
const skillCon01 = document.querySelector('.skillCon01');
const skillCon02 = document.querySelector('.skillCon02');  
const exercises01 = document.querySelector('.exercises01');
const exercises02 = document.querySelector('.exercises02');
const portfolio01 = document.querySelector('.portfolio01');
const portfolio02 = document.querySelector('.portfolio02');

window.addEventListener("scroll", function () {
    if(window.scrollY >= 300) {
        skillCon01.style.display ='block';
        skillCon02.style.display ='block';
    }
    if(window.scrollY >= 500) {
        exercises01.style.display ='block';
    }
    if(window.scrollY >= 600) {
        exercises02.style.display ='block';
    }
    if(window.scrollY >= 700) {
        portfolio01.style.display ='block';
    }
    if(window.scrollY >= 800) {
        portfolio02.style.display ='block';
    }
});

// ローディング画面
const loding = document.querySelector('.js-loding');

loding.addEventListener('click', function() {
    loding.style.display = 'block';
    body.style.overflow = 'visible'
    loding.classList.add('js-lodingOut');
});


// モーダル////////////////////////////////////////////////////////////////////////////////////////

const modal = document.querySelector('.js-modal'); //ウィンドウ背景の変数
const modal01 = document.querySelector('.js-skillModal01');
const modal02 = document.querySelector('.js-skillModal02');
const body = document.querySelector('.bodySec') //ボディにoverflow:hidden;を設定するための設定

skillCon01.addEventListener('click', function() {
    modal.style.display = 'block';
    modal01.style.display = 'block';
    body.style.overflow = 'hidden';
});

skillCon02.addEventListener('click', function() {
    modal.style.display = 'block';
    modal02.style.display = 'block';
    body.style.overflow = 'hidden';
});
function modalclose(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
        modal01.style.display = 'none';
        modal02.style.display = 'none';
        body.style.overflow = 'visible';
    }
  }
  addEventListener('click', modalclose);

// トップ/////////////////////////////////////////////////////////////////////////////

const topGirl = document.querySelector('.topGirl'); 
const topGirl02 = document.querySelector('.topGirl02');
const topGirlSkill = document.querySelector('.topGirlSkill');
const topGirlGame = document.querySelector('.topGirlGame');

const top01 = document.querySelector('.top');
const onOff = document.querySelector('.onOff');
const topDor = document.querySelector('.topDor');
const topSkill = document.querySelector('.topSkill');
const topTv = document.querySelector('.topTv');
const topTel = document.querySelector('.topTel');
const topTvCon = document.querySelector('.topTvCon');
const topLight = document.querySelector('.topLight');

const popAddress = document.querySelector('.popAddress');
const popGallery = document.querySelector('.popGallery');
const popSkill = document.querySelector('.popSkill');
const bikkuri = document.querySelector('.bikkuri');

let i = Math.floor(Math.random() * 4)
topSwitch();

topDor.addEventListener('mouseover', function() {
    i = 0;
    topSwitch()
});

topSkill.addEventListener('mouseover', function() {
    i = 1;
    topSwitch()
});
popSkill.addEventListener('mouseover', function() {
    i = 1;
    topSwitch()
});


topTv.addEventListener('mouseover', function() {
    i = 2;
    topSwitch()
});
popGallery.addEventListener('mouseover', function() {
    i = 2;
    topSwitch()
});


topTel.addEventListener('mouseover', function() {
    i = 3;
    topSwitch()
});
popAddress.addEventListener('mouseover', function() {
    i = 3;
    topSwitch()
});

function topNoneSet() {
    topGirlSkill.style.display = 'none';
    topGirl.style.display = 'none';
    topGirl02.style.display = 'none';
    topGirlGame.style.display = 'none';
    topTvCon.style.display = 'block';
} 

function topSwitch() {
    switch(i) {
        case i = 0:
            topNoneSet();
            topGirl02.src="images/topGirl02.png";
            topGirl02.style.display = 'block';
        break;
        case i = 1:
            topNoneSet();
            topGirlSkill.style.display = 'block';
        break;
        case i = 2:
            topNoneSet();
            topGirlGame.style.display = 'block';
            topTvCon.style.display = 'none';
        break;
        case i = 3:
            topNoneSet();
            topGirl.style.display = 'block';
        break;
}};

topGirl02.addEventListener('click', function() {
    topGirl02.src="images/topGirl03.png";
});

topLight.addEventListener('click', function() {
    onOff.style.display = 'block';
    top01.style.overflow = 'hidden';
    bikkuri.style.display = 'block';
    switch( i ) {
        case i = 0:
            bikkuri.classList.add("bikkuri00");
        break
        case i = 1:
            bikkuri.classList.add("bikkuri01");
        break
        case i = 2:
            bikkuri.classList.add("bikkuri02");
        break
        case i = 3:
            bikkuri.classList.add("bikkuri03");
        break
    }
})

onOff.addEventListener('click', function() {
    onOff.style.display = 'none';
    top01.style.overflow = 'auto';
    bikkuri.style.display = 'none';
    bikkuri.classList.remove("bikkuri00");
    bikkuri.classList.remove("bikkuri01");
    bikkuri.classList.remove("bikkuri02");
    bikkuri.classList.remove("bikkuri03");
});

console.log(i)
// ギャラリー

const galleryGirl = document.querySelector('.galleryGirl');
const galleryGirl02 = document.querySelector('.galleryGirl02');
const arrowR = document.querySelector('.arrowR');
const arrowL = document.querySelector('.arrowL');
const myGallery = document.querySelector('.myGallery');

galleryGirl.addEventListener('click', function() {
    myGallery.classList.toggle("slideR");
    galleryGirl.classList.toggle("galleryGirl02");
    arrowR.classList.toggle("arrowR02");
});
arrowR.addEventListener('click', function() {
    myGallery.classList.toggle("slideR");
    galleryGirl.classList.toggle("galleryGirl02");
    arrowR.classList.toggle("arrowR02");
});
arrowL.addEventListener('click', function() {
    myGallery.classList.toggle("slideL");
    galleryGirl.classList.toggle("galleryGirl02");
    arrowR.classList.toggle("arrowR02");
});