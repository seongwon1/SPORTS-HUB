let btn= document.querySelectorAll(".section1-top-imgbox-hover_select_color");
let change= document.querySelector(".section1-top-imgbox-img");

    btn[0].addEventListener('mouseover',function(){
        change.src= "img/여자/나이키 브라탑/나이키 브라탑  검정.png";
    })
    btn[1].addEventListener('mouseover',function(){
        change.src= "img/여자/나이키 브라탑/나이키 브라탑 보라색.png";
    })
    btn[2].addEventListener('mouseover',function(){
        change.src= "img/여자/나이키 브라탑/나이키 브라탑 분홍.png";
    })
    // btn[3].addEventListener('mouseover',function(){
    //     change.src= "img/여자/나이키 브라탑/나이키 브라탑 화이트.png";
    // })


// <!-- 7월 23일 오후 15:12 content_area3_img 모달 기능  최성원-->
let modal = document.getElementById('modal');

let area3_img1 = document.getElementById('area3_img1');
let area3_img2 = document.getElementById('area3_img2');
let area3_img3 = document.getElementById('area3_img3');
let modal_main_img = document.getElementById('modal_main_img');
let modal_bottom_preview_img = document.getElementsByClassName('modal-bottom-preview-img');
let span = document.getElementsByClassName("close")[0];

area3_img1.addEventListener('click',function(){
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // 모달 시 스크롤 방지
    modal_main_img.src = 'img/여자/요가매트 호버이미지.png';
    for(let i=0; i<modal_bottom_preview_img.length; i++){
    modal_bottom_preview_img[i].src = 'img/여자/요가매트/요가매트'+(i+1)+'.jpg';
    }
})

area3_img2.addEventListener('click',function(){
    modal.style.display = 'block';
    document.body.style.overflow = "hidden";
    modal_main_img.src = 'img/여자/짐볼 호버이미지.png';

    for(let i=0; i<modal_bottom_preview_img.length; i++){
    modal_bottom_preview_img[i].src = 'img/여자/짐볼/짐볼'+(i+1)+'.jpg';
    }
})

area3_img3.addEventListener('click',function(){
    modal.style.display = 'block';
    document.body.style.overflow = "hidden";
    modal_main_img.src = 'img/여자/소프트웨이트바 호버이미지.png';

    for(let i=0; i<modal_bottom_preview_img.length; i++){
    modal_bottom_preview_img[i].src = 'img/여자/소프트웨이트바/소프트웨이트바'+(i+1)+'.jpg';
    }
})

span.addEventListener('click',function(){
    modal.style.display = 'none';
    document.body.style.overflow = "unset";
})

function changeimg(image){
    modal_main_img.src = image.src;
} 

// <!-- 7월 23일 오후 15:12 content_area3_img 모달 기능 여기까지 최성원-->