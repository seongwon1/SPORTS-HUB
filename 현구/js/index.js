//popup
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
const minusBtn = document.querySelectorAll('.minus');// 수량 - 여자
const plusBtn = document.querySelectorAll('.plus');// 수량 + 남자
const count = document.querySelectorAll('.count'); // 수량이 찍힐 input 여자
let inboundNum = 0; //입고 수량 여자
// 7월 27일 정인경 남자 수량 추가
const man_minus = document.querySelectorAll('.minus_m');// 수량 - 남자
const man_plus = document.querySelectorAll('.plus_m');// 수량 + 남자
const man_count = document.querySelectorAll('.count_m'); // 수량이 찍힐 input 남자
let inptNum = 0; //입고 수량 남자

const s1_btn1 = document.querySelector(".section1_pageBtn_1");
const s1_btn2 = document.querySelector(".section1_pageBtn_2");
const s2_btn1 = document.querySelector(".section2_pageBtn_1");
const s2_btn2 = document.querySelector(".section2_pageBtn_2");
let section_imgBox_w = document.querySelectorAll(".section_imgBox_w");
let section_imgBox_m = document.querySelectorAll(".section_imgBox_m");

// area3 modal
let area3_modal = document.getElementById('area3_modal');
let area3_img1 = document.getElementById('area3_img1'); // area3 요가매트이미지
let area3_img2 = document.getElementById('area3_img2'); // area3 짐볼이미지
let area3_img3 = document.getElementById('area3_img3'); // area3 소프트웨이트바이미지
let modal_main_img = document.getElementById('modal_main_img'); //모달창 띄울시 큰 메인 이미지
let modal_bottom_preview_img = document.getElementsByClassName('modal-bottom-preview-img'); // 모달창 8가지 이미지를 나타내는 변수
let span = document.getElementsByClassName("area3_close")[0]; // 모달창 close버튼
let caption = document.getElementById('caption'); // 모달창 밑에 카테고리 이름 

// 사이드바
let side_menu_add = document.querySelectorAll('.side_menu_label')

for(let i=0; i<shopping_icon_woman.length; i++){
    shopping_icon_woman[i].addEventListener('click',function(){
        section_modal_woman.style.display = 'block';
        section_modal_img_woman.children[0].src = this.parentNode.parentNode.parentNode.parentNode.parentNode.children[0].children[1].src;
        section_modal_img_woman.children[1].children[0].src = this.parentNode.parentNode.parentNode.parentNode.parentNode.children[0].children[0].src;
        section_modal_font_woman.children[0].children[1].innerHTML = this.parentNode.parentNode.parentNode.parentNode.children[0].children[0].childNodes[0].textContent;//0727 경로 수정 수정자 김형준
        section_modal_font_woman.children[1].children[0].innerHTML = this.parentNode.parentNode.parentNode.parentNode.children[0].children[2].textContent;//0727 경로 수정 수정자 김형준
    })
}

for(let i=0; i<shopping_icon_man.length; i++){
    shopping_icon_man[i].addEventListener('click',function(){
        section_modal_man.style.display = 'block';
        section_modal_img_man.children[0].src = this.parentNode.parentNode.parentNode.parentNode.parentNode.children[0].children[1].src;
        section_modal_img_man.children[1].children[0].src = this.parentNode.parentNode.parentNode.parentNode.parentNode.children[0].children[0].src;
        section_modal_font_man.children[0].children[1].innerHTML = this.parentNode.parentNode.parentNode.parentNode.children[0].children[0].childNodes[0].textContent;//0727 경로 수정 수정자 김형준
        section_modal_font_woman.children[1].children[0].innerHTML = this.parentNode.parentNode.parentNode.parentNode.children[0].children[2].textContent;//0727 경로 수정 수정자 김형준
    })
}
for(let i=0; i<modal_confirm.length; i++){
    modal_confirm[i].addEventListener('click',function(){
        section_modal_woman.style.display = 'none';
        section_modal_man.style.display = 'none';
        inboundNum = 0;              //
        count[0].value = inboundNum; // 0726 19:09 모달이 닫히면 수량 리셋되게 수정자 : 김형준
    })
}
for(let i=0; i<modal_close.length; i++){
    modal_close[i].addEventListener('click',function(){
        section_modal_man.style.display = 'none';
        section_modal_woman.style.display = 'none';
        inboundNum = 0; 
        inptNum = 0;              //
        count[0].value = inboundNum; // 0726 19:09 모달이 닫히면 수량 리셋되게 수정자 : 김형준
        man_count[0].value = inptNum;
    })
}
// modal 수량 버튼
minusBtn[0].addEventListener('click',function(){ //입고
    if(inboundNum >0){ // 0 밑으로는 안 내려감
        inboundNum--;
        count[0].value = inboundNum;
    }
})
plusBtn[0].addEventListener('click',function(){
    inboundNum++;
    count[0].value = inboundNum;
})
//7월 27일 남자 수량버튼 추가
// modal 수량 버튼 남자
man_minus[0].addEventListener('click',function(){ //입고
    if(inptNum >0){ // 0 밑으로는 안 내려감
        inptNum--;
        man_count[0].value =inptNum;
    }
})
man_plus[0].addEventListener('click',function(){
    inptNum++;
    man_count[0].value =inptNum;
})

// <!-- 7월 23일 오후 15:12 content_area3_img 모달 기능  최성원-->

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

//0726 19:33 섹션 페이지 전환 작업 수정자:김형준

s1_btn1.addEventListener('click',function(){
    let w_page1_info = JSON.parse(JSON.stringify(Page1_w));
    for(let i=0; i<section_imgBox_w.length; i++){
        section_imgBox_w[i].children[0].children[0].src = w_page1_info[i].img;
        section_imgBox_w[i].children[0].children[1].src = w_page1_info[i].img_hover;
        section_imgBox_w[i].children[1].children[0].children[0].textContent = w_page1_info[i].name;
        section_imgBox_w[i].children[1].children[0].children[1].textContent = w_page1_info[i].price;
    }
})
s1_btn2.addEventListener('click',function(){
    let w_page1_info = JSON.parse(JSON.stringify(Page2_w));
    for(let i=0; i<section_imgBox_w.length; i++){
        section_imgBox_w[i].children[0].children[0].src = w_page1_info[i].img;
        section_imgBox_w[i].children[0].children[1].src = w_page1_info[i].img_hover;
        section_imgBox_w[i].children[1].children[0].children[0].textContent = w_page1_info[i].name;
        section_imgBox_w[i].children[1].children[0].children[1].textContent = w_page1_info[i].price;
    }
})
s2_btn1.addEventListener('click',function(){
    let w_page1_info = JSON.parse(JSON.stringify(Page1_m));
    for(let i=0; i<section_imgBox_m.length; i++){
        section_imgBox_m[i].children[0].children[0].src = w_page1_info[i].img;
        section_imgBox_m[i].children[0].children[1].src = w_page1_info[i].img_hover;
        section_imgBox_m[i].children[1].children[0].children[0].textContent = w_page1_info[i].name;
        section_imgBox_m[i].children[1].children[0].children[1].textContent = w_page1_info[i].price;
    }
})
s2_btn2.addEventListener('click',function(){
    let w_page1_info = JSON.parse(JSON.stringify(Page2_m));
    for(let i=0; i<section_imgBox_m.length; i++){
        section_imgBox_m[i].children[0].children[0].src = w_page1_info[i].img;
        section_imgBox_m[i].children[0].children[1].src = w_page1_info[i].img_hover;
        section_imgBox_m[i].children[1].children[0].children[0].textContent = w_page1_info[i].name;
        section_imgBox_m[i].children[1].children[0].children[1].textContent = w_page1_info[i].price;
    }
})
// 섹션 페이지 전환

// 7월 27일 02:30 김현구 dropdown 코드 수정

for(i=0;i<side_menu_add.length;i++){
    side_menu_add[i].addEventListener('click',function(){
    if(this.parentNode.children[1].children[0].getAttribute('class')=='side_menu_Add'){
        this.parentNode.children[1].children[0].classList.add("side_menu_dropdown_classList") 
       
    }
    else if(this.parentNode.children[1].children[0].getAttribute('class')=='side_menu_Add side_menu_dropdown_classList')
    {
        this.parentNode.children[1].children[0].classList.remove("side_menu_dropdown_classList")
      
    }
})
}

/* 7월 27일 17:30 김현구 side_menu gender 클릭시 효과*/
let side_menu_male = document.querySelector('.side_menu_male');
let side_menu_female = document.querySelector('.side_menu_female');
let side_menu_gender_male = document.querySelector('.side_menu_gender_male')
let side_menu_gender_female = document.querySelector('.side_menu_gender_female')
let side_menu_gender_flag = 0;
let side_menu_gender_flag2 = 0;


side_menu_male.addEventListener("click",function(){
    if(side_menu_gender_flag == 0){
    side_menu_gender_male.style.backgroundColor = '#E0E0E0';
    side_menu_gender_flag = 1;
    }
    else if(side_menu_gender_flag == 1){
    side_menu_gender_male.style.backgroundColor = '#FFF';
    side_menu_gender_flag = 0;
    }
})  
side_menu_female.addEventListener("click",function(){
    if(side_menu_gender_flag2 == 0){
        side_menu_gender_female.style.backgroundColor = '#E0E0E0'
        side_menu_gender_flag2 = 1;
    }
    else if(side_menu_gender_flag2 == 0){
        side_menu_gender_female.style.backgroundColor = '#FFF';
        side_menu_gender_flag2 = 1;
    }
})