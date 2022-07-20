let id = document.getElementById('id');
let pw = document.getElementById('pw');
let btn = document.getElementById('btn');
let id_alert= document.getElementById('id_alert');
let pw_alert= document.getElementById('pw_alert');

btn.addEventListener('click',function(){
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
})

