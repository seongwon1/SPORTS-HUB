// $(function(){
//     $("#confirm").click(function(){
//         modalClose();
//         //컨펌 이벤트 처리
//     });
//     $("#modal-open").click(function(){   
//              $("#popup").css('display','flex').hide().fadeIn();
//     });
//     $("#close").click(function(){
//         modalClose();
//     });
//     function modalClose(){
//       $("#popup").fadeOut();
//     }
//   });

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

