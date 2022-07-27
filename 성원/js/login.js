let id = document.getElementById('id');
let pw = document.getElementById('pw');
let login_btn = document.getElementById('login_btn');
let id_alert= document.getElementById('id_alert');
let pw_alert= document.getElementById('pw_alert');
let keep = document.getElementById('keep');
let id_info = localStorage.getItem('id_info')?JSON.parse(localStorage.getItem('id_info')):[];
id.value = id_info[id_info.length-1];

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
    // 아이디 유지를 체크 했을 때
    else if(keep.checked){
        update();
        alert("로그인 성공");
    }
})

// id값이 저장되어 있지 않으면 id입력창에 "undefined"값이 나타나게 되어
// undefined 출력을 없애기 위해 id값을 초기화 시켜줌.
if(id.value == "undefined"){
    id.value = "";
}

// 로컬스토리지에 저장하여 아이디 정보를 저장
function update(){
    id_info.push(id.value);
    localStorage.setItem("id_info", JSON.stringify(id_info));
}