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
const minusBtn = document.querySelectorAll('.minus');// 수량 -
const plusBtn = document.querySelectorAll('.plus');// 수량 +
const count = document.querySelectorAll('.count'); // 수량이 찍힐 input
let inboundNum = 0; //입고 수량

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