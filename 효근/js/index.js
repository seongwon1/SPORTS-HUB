//섹션 모달 0725 19:07 김형준
const section_modal = document.querySelector(".modal-wrap");
const section_modal_woman = document.querySelector(".modal-woman");//모달 woman
const section_modal_man = document.querySelector(".modal-man");//모달 man
const section_modal_img_man = document.querySelector('.photo_man');//모달 이미지를 바꿀 때 쓸 변수
const section_modal_img_woman = document.querySelector('.photo_woman');//모달 이미지를 바꿀 때 쓸 변수
const section_modal_font_woman = document.querySelector('.font_woman');//모달 텍스트를 바꿀 때 쓸 변수
const section_modal_font_man = document.querySelector('.font_man');//모달 텍스트를 바꿀 때 쓸 변수
const modal_confirm = document.querySelectorAll(".confirm");//모달의 확인 버튼
const modal_close = document.querySelectorAll(".close");// 모달의 닫기 버튼
let shopping_icon_woman = document.querySelectorAll(".shopping_icon_woman");//woman상품의 장바구니 아이콘
let shopping_icon_man = document.querySelectorAll(".shopping_icon_man");//man상품의 장바구니 아이콘

console.log(shopping_icon_man);
console.log(shopping_icon_woman);

for(let i=0; i<shopping_icon_woman.length; i++){
    shopping_icon_woman[i].addEventListener('click',function(){
        section_modal_woman.style.display = 'block';
        section_modal_img_woman.children[0].src = this.parentNode.parentNode.parentNode.parentNode.parentNode.children[0].children[1].src;
        section_modal_img_woman.children[1].children[0].src = this.parentNode.parentNode.parentNode.parentNode.parentNode.children[0].children[0].src;
        section_modal_font_woman.children[0].children[1].innerHTML = this.parentNode.parentNode.parentNode.parentNode.children[0].children[0].childNodes[0].textContent;
        section_modal_font_woman.children[2].children[0].innerHTML = this.parentNode.parentNode.parentNode.parentNode.children[0].children[1].childNodes[0].textContent;
    })
}

for(let i=0; i<shopping_icon_man.length; i++){
    shopping_icon_man[i].addEventListener('click',function(){
        section_modal_man.style.display = 'block';
        section_modal_img_man.children[0].src = this.parentNode.parentNode.parentNode.parentNode.parentNode.children[0].children[1].src;
        section_modal_img_man.children[1].children[0].src = this.parentNode.parentNode.parentNode.parentNode.parentNode.children[0].children[0].src;
        section_modal_font_man.children[0].children[1].innerHTML = this.parentNode.parentNode.parentNode.parentNode.children[0].children[0].childNodes[0].textContent;
        section_modal_font_man.children[2].children[0].innerHTML = this.parentNode.parentNode.parentNode.parentNode.children[0].children[1].childNodes[0].textContent;
    })
}
for(let i=0; i<modal_confirm.length; i++){
    modal_confirm[i].addEventListener('click',function(){
        section_modal_woman.style.display = 'none';
        section_modal_man.style.display = 'none';
    })
}
for(let i=0; i<modal_close.length; i++){
    modal_close[i].addEventListener('click',function(){
        section_modal_man.style.display = 'none';
        section_modal_woman.style.display = 'none';
    })
}

// <!-- 7월 23일 오후 15:12 content_area3_img 모달 기능  최성원-->
let area3_modal = document.getElementById('area3_modal');
let area3_img1 = document.getElementById('area3_img1');
let area3_img2 = document.getElementById('area3_img2');
let area3_img3 = document.getElementById('area3_img3');
let modal_main_img = document.getElementById('modal_main_img');
let modal_bottom_preview_img = document.getElementsByClassName('modal-bottom-preview-img');
let span = document.getElementsByClassName("area3_close")[0];
let caption = document.getElementById('caption');

area3_img1.addEventListener('click',function(){
    area3_modal.style.display = "block";
    document.body.style.overflow = "hidden"; // 모달 시 스크롤 방지
    modal_main_img.src = 'img/여자/요가매트 호버이미지.png';
    for(let i=0; i<modal_bottom_preview_img.length; i++){
    modal_bottom_preview_img[i].src = 'img/여자/요가매트/요가매트'+(i+1)+'.jpg';
    }
    caption.innerText = "요가매트";
})

area3_img2.addEventListener('click',function(){
    area3_modal.style.display = 'block';
    document.body.style.overflow = "hidden";
    modal_main_img.src = 'img/여자/짐볼 호버이미지.png';

    for(let i=0; i<modal_bottom_preview_img.length; i++){
    modal_bottom_preview_img[i].src = 'img/여자/짐볼/짐볼'+(i+1)+'.jpg';
    }
    caption.innerText = "짐볼";
})

area3_img3.addEventListener('click',function(){
    area3_modal.style.display = 'block';
    document.body.style.overflow = "hidden";
    modal_main_img.src = 'img/여자/소프트웨이트바 호버이미지.png';

    for(let i=0; i<modal_bottom_preview_img.length; i++){
    modal_bottom_preview_img[i].src = 'img/여자/소프트웨이트바/소프트웨이트바'+(i+1)+'.jpg';
    }
    caption.innerText = "소프트웨이트바";
})

span.addEventListener('click',function(){
    area3_modal.style.display = 'none';
    document.body.style.overflow = "unset";
})

function changeimg(image){
    modal_main_img.src = image.src;
} 

// <!-- 7월 23일 오후 15:12 content_area3_img 모달 기능 여기까지 최성원-->


let side_menu_add = document.querySelectorAll('.side_menu_label')
let side_menu_flag = true;
for(i=0;i<side_menu_add.length;i++){
    side_menu_add[i].addEventListener('click',function(){
    if(side_menu_flag == true){
        this.parentNode.children[1].children[0].style.display="block";
        side_menu_flag = false;
    }
    else{
        this.parentNode.children[1].children[0].style.display="none";
        side_menu_flag = true;
        
    }
})
}

// 0726 popup 기능 추가 수정자 박효근
let popup1 = document.querySelector('.popup1');
let popup2 = document.querySelector('.popup2');
let popup3 = document.querySelector('.popup3');
let popup4 = document.querySelector('.popup4'); 
let popup5 = document.querySelector('.popup5');
let popup6 = document.querySelector('.popup6');
let popup7 = document.querySelector('.popup7');
let popup8 = document.querySelector('.popup8'); 
let hidden1 = document.querySelector('.hidden1');
let hidden2 = document.querySelector('.hidden2');
let hidden3 = document.querySelector('.hidden3');
let hidden4 = document.querySelector('.hidden4');
let hidden5 = document.querySelector('.hidden5');
let hidden6 = document.querySelector('.hidden6');
let hidden7 = document.querySelector('.hidden7');
let hidden8 = document.querySelector('.hidden8');
setTimeout(function(){
    popup1.style.transform = 'translateX(10%)'
    popup5.style.transform = 'translateX(10%)'
}, 2000);
setTimeout(function(){
    popup1.style.transform = 'translateX(-200%)'
    popup5.style.transform = 'translateX(-200%)'
}, 12000);
setTimeout(function(){
    popup2.style.transform = 'translateX(10%)'
    popup6.style.transform = 'translateX(10%)'
}, 20000);
setTimeout(function(){
    popup2.style.transform = 'translateX(-200%)'
    popup6.style.transform = 'translateX(-200%)'
}, 30000);
setTimeout(function(){
    popup3.style.transform = 'translateX(10%)'
    popup7.style.transform = 'translateX(10%)'
}, 38000);
setTimeout(function(){
    popup3.style.transform = 'translateX(-200%)'
    popup7.style.transform = 'translateX(-200%)'
}, 48000);
setTimeout(function(){
    popup4.style.transform = 'translateX(10%)'
    popup8.style.transform = 'translateX(10%)'
}, 56000);
setTimeout(function(){
    popup4.style.transform = 'translateX(-200%)'
    popup8.style.transform = 'translateX(-200%)'
}, 66000);
hidden1.addEventListener('click',function(){
    popup1.style.transform = 'translateX(-200%)'
});
hidden2.addEventListener('click',function(){
    popup2.style.transform = 'translateX(-200%)'
});
hidden3.addEventListener('click',function(){
    popup3.style.transform = 'translateX(-200%)'
});
hidden4.addEventListener('click',function(){
    popup4.style.transform = 'translateX(-200%)'
});
hidden5.addEventListener('click',function(){
    popup5.style.transform = 'translateX(-200%)'
});
hidden6.addEventListener('click',function(){
    popup6.style.transform = 'translateX(-200%)'
});
hidden7.addEventListener('click',function(){
    popup7.style.transform = 'translateX(-200%)'
});
hidden8.addEventListener('click',function(){
    popup8.style.transform = 'translateX(-200%)'
});
// popup 끝