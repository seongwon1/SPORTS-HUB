let id = document.getElementById('id');
let pw = document.getElementById('pw');
let login_btn = document.getElementById('login_btn');
let id_alert= document.getElementById('id_alert');
let pw_alert= document.getElementById('pw_alert');
let keep = document.getElementById('keep');

login_btn.addEventListener('click',function(){
    if(id.value.length==0){
        id_alert.innerText="필수 입력 항목입니다.";   
        id.style.borderColor="red";
        id.addEventListener('keyup',function(){
            if(id.value.length!==0){
                id_alert.innerHTML="";
                id.style.borderColor="";
            }
        })
    } 

    if(pw.value.length==0){
        pw_alert.innerText="필수 입력 항목입니다.";   
        pw.style.borderColor="red";
        pw.addEventListener('keyup',function(){
            if(pw.value.length!==0){
                pw_alert.innerHTML="";
                pw.style.borderColor="";
            } 
        })
    }  
    else{
        alert("로그인 성공");
    }
})