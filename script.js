'use strict'

// スクロールイベント
const skillCon = document.querySelectorAll('.skillCon');

const exercises01 = document.querySelector('.exercises01');
const exercises02 = document.querySelector('.exercises02');
const exercises03 = document.querySelector('.exercises03');
const portfolio01 = document.querySelector('.portfolio01');
const portfolio02 = document.querySelector('.portfolio02');

window.addEventListener("scroll", function () {
    if(window.scrollY >= 400) {
        for(let k = 0; k < skillCon.length; k++){
            skillCon[k].style.display ='block';
        }
    }
    if(window.scrollY >= 800) {
        exercises01.style.display ='block';
    }
    if(window.scrollY >= 830) {
        exercises02.style.display ='block';
    }
    if(window.scrollY >= 860) {
        exercises03.style.display ='block';
    }
    if(window.scrollY >= 900) {
        portfolio01.style.display ='block';
    }
    if(window.scrollY >= 950) {
        portfolio02.style.display ='block';
    }
});

// ローディング画面
const loding = document.querySelector('.js-loding');
const body = document.querySelector('.bodySec') //ボディにoverflow:hidden;を設定するための設定

loding.addEventListener('click', function() {
    loding.style.display = 'block';
    body.style.overflow = 'visible'
    loding.classList.add('js-lodingOut');
});

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

// ギャラリー

const galleryGirl = document.querySelector('.galleryGirl');
const arrowR = document.querySelector('.arrowR');
const arrowL = document.querySelector('.arrowL');
const myGallery = document.querySelector('.myGallery');
const winSizeTab = window.matchMedia('(max-width:768px)');
const winSizeSp = window.matchMedia('(max-width:375px)');

// 現在の位置を変数に(カード)
let j = 0;

// 現在の位置を変数に（ガール）
let k = 0;

// 移動する距離を変数に
let moveCon = 390;

// スマホ
let moveConSp = 340;


let moveGirl = 10;
// 要素の数を入力 数が増えたときはここを変える。
const count = 5;

// 右ボタン
arrowR.addEventListener('click', function() {
    galleryGirl.style.transform = 'scaleX(1)';
    if(j === count){
        j = 0;
        myGallery.style.transform = 'translateX(0px)';
        galleryGirl.classList.remove("galleryGirl02");
    } else { 
        j++;
        if(winSizeSp.matches) {
            myGallery.style.transform = `translateX(-${moveConSp*j}px)`;
        } else if(winSizeTab.matches) {
            if(j <= (count-1)){
                myGallery.style.transform = `translateX(-${(moveConSp - 3)*j}px)`;
            } else {
                j = 0;
                myGallery.style.transform = 'translateX(0px)';
            }
        } else {
            if(j <= (count-2)){
                myGallery.style.transform = `translateX(-${(moveConSp - 3)*j}px)`;
            } else {
                j = 0;
                galleryGirl.style.transform = 'scaleX(-1)';
                myGallery.style.transform = 'translateX(0px)';
            }
            switch(j){
                case 0:
                    galleryGirl.style.left ='20%';
                    break;
                case 1:
                    galleryGirl.style.left =`38%`;
                    break;
                case 2:
                    galleryGirl.style.left =`56%`;
                    break;
                case 3:
                    galleryGirl.style.left ='70%';
                    break;
            }
            myGallery.style.transform = `translateX(-${moveCon*j}px)`;
}}});

// 左ボタン
arrowL.addEventListener('click', function() {
    galleryGirl.style.transform = 'scaleX(-1)';
    if(winSizeSp.matches) {
        if(j === 0){
            j = count;
            myGallery.style.transform = `translateX(-${moveConSp*j}px)`;        
        } else {
            j--;
            myGallery.style.transform = `translateX(-${moveConSp*j}px)`;
        }
    } else if(winSizeTab.matches) {
        if(j === 0){
            j = count-1;
            myGallery.style.transform = `translateX(-${moveConSp*j}px)`;        
        } else {
            j--;
            myGallery.style.transform = `translateX(-${moveConSp*j}px)`;
        }        
    } else {
        if(j === 0){
            j = count - 2;
            myGallery.style.transform = `translateX(-${moveCon*j}px)`;        
        } else {
            j--;
            myGallery.style.transform = `translateX(-${moveCon*j}px)`;
        }        
        switch(j){
            case 0:
                galleryGirl.style.left ='20%';
                break;
            case 1:
                galleryGirl.style.left =`38%`;
                break;
            case 2:
                galleryGirl.style.left =`56%`;
                break;
            case 3:
                galleryGirl.style.left ='70%';
                break;
        }   
}});