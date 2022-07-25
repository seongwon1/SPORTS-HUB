const modal = document.querySelector('.modal-wrap');
const btnOpenPopup = document.querySelector('#shopping')

btnOpenPopup.addEventListener('click', () => {
  modal.style.display = 'block';
});

const endmodal = document.querySelector('.modal-wrap');
const confirm = document.querySelector('#confirm');
confirm.addEventListener('click',() => {
    endmodal.style.display = 'none';
});

const finishmodal = document.querySelector('.modal-wrap');
const buttom = document.querySelector('#close');
buttom.addEventListener('click',() => {
    finishmodal.style.display = 'none';
});

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


/* side_menu_dropdown menu 7월 25일 김현구*/
// let side_menu_add_clothes = document.querySelector('.side_menu_clothes_label')
// let side_menu_dropdown_clothes = document.querySelector('.side_menu_clothesAdd')
// let side_menu_Clothsflag = true;
// side_menu_add_clothes.addEventListener('click',function(){
//     if(side_menu_Clothsflag == true){
//         side_menu_dropdown_clothes.style.display="block";
//         side_menu_Clothsflag = false
//     }
//     else{
//         side_menu_dropdown_clothes.style.display="none";
//         side_menu_Clothsflag = true
//     }
// })
// let side_menu_add_shoes = document.querySelector('.side_menu_shoes_label');
// let side_menu_dropdown_shoes = document.querySelector('.side_menu_shoesAdd')
// let side_menu_shoesflag = true;
// side_menu_add_shoes.addEventListener('click',function(){
//     if(side_menu_shoesflag == true){
//         side_menu_dropdown_shoes.style.display ="block";
//         side_menu_shoesflag = false
//     }
//     else{
//         side_menu_dropdown_shoes.style.display ="none";
//         side_menu_shoesflag = true;
//     }
// })

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
