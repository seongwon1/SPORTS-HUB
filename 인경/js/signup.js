const id = document.querySelector('#id');
const pw1 = document.querySelector('#pw1');
const pw2 = document.querySelector('#pw2');
const names = document.querySelector('#name');
const phone = document.querySelector('#phone');
const birth = document.querySelector('#birth');
const male = document.querySelector('#male');
const female = document.querySelector('#female');
const male_check = document.querySelector('.male_check');
const female_check = document.querySelector('.female_check');
const gender_check_icon = document.getElementsByClassName('xi-check');
const agree = document.getElementsByClassName('agree');

const id_alert = document.querySelector('#id_alert');
const pw1_alert = document.querySelector('#pw1_alert');
const pw2_alert = document.querySelector('#pw2_alert');
const name_alert = document.querySelector('#name_alert');
const phone_alert = document.querySelector('#phone_alert');
const birth_alert = document.querySelector('#birth_alert');
const gender_alert = document.querySelector('#gender_alert');

const SignIn_Btn = document.querySelector('.SignIn_Btn');
// input 의 id값들

// 정규표현식을 리터럴 방식으로 사용
let emp = /\s/g; // 모든 공백
// const NUM_CHECK = /^[0-9]*$/;
//숫자만 체크

const ID_CHECK =  /^[A-za-z0-9]{5,15}$/g; // 영문 대문자 또는 소문자 또는 숫자로 시작, 길이 5~15자
//숫자와 영문의 대소문자만 체크

const PW1_CHECK = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
const PW2_CHECK = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
// 8 ~ 16자 영문, 숫자, 특수문자를 최소 한가지씩 조합

const NAME_CHECK = /^[가-힣]{2,5}$/;
//이름은 한글만 가능 (2~5글자 사이 자음, 모음을 하나만 사용하면 체크 안됨)

// const IDENTITY_CHECK = /\d{6}\-[1-4]\d{6}/;
// //6자리의 숫자 이후 하이픈(-)이 나오고 그 뒤에 한 자리는 1~4사이 숫자만 
// //그 뒤엔 아무 숫자 6자리

// const MAIL_CHECK = /\w+@\w+\.\w+(\.\w+)?/;
// //아무 단어 뒤에 @가 나오고 아무 단어가 나온후
// //마침표(.)가 나온 뒤 아무 단어

const PHONENUMBER_CHECK = /^\d{2,3}-\d{3,4}-\d{4}$/;
//첫자리는 2~3자리 숫자 뒤 하이픈
//그 뒤엔 3~4자리 숫자. 그 뒤엔 하이픈 이후 4자리 숫자

const BIRTH_CHECK = /^(19[0-9][0-9]|20\d{2})-(0[0-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;
//19xx-xx-xx형식


SignIn_Btn.addEventListener('click',function(){
    // 아이디 검사
    if(!id.value.match(ID_CHECK)){
        id_alert.style.fontSize= '15px';
        id_alert.style.display= 'display';
        id_alert.style.color = 'red';
        id.style.borderColor="red";
        id_alert.innerHTML="아이디를 다시입력해주세요";   
        id.focus();
        id.addEventListener('keyup',function(){
            if(id.value.match(ID_CHECK)){
                id_alert.style.fontSize= '';
                id_alert.style.display= '';
                id_alert.style.color = '';
                id.style.borderColor="";
                id_alert.innerHTML="";
            }
        })

    } 
    else if(!pw1.value.match(PW1_CHECK)){
        // 패스워드 검사
        pw1_alert.style.fontSize= '15px';
        pw1_alert.style.display= 'display';
        pw1_alert.style.color = 'red';
        pw1.style.borderColor="red";
        pw1_alert.innerHTML="비밀번호를 다시입력해주세요";   
        pw1.focus();
        pw1.addEventListener('keyup',function(){
            if(pw1.value.match(PW1_CHECK)){
                pw1_alert.style.fontSize= '';
                pw1_alert.style.display= '';
                pw1_alert.style.color = '';
                pw1.style.borderColor="";
                pw1_alert.innerHTML="";
            }
        })
    }

    else if(!pw2.value.match(PW2_CHECK)){
        // 비밀번호 재입력 검사
        pw2_alert.style.fontSize= '15px';
        pw2_alert.style.display= 'display';
        pw2_alert.style.color = 'red';
        pw2.style.borderColor="red";
        pw2_alert.innerHTML="비밀번호를 다시입력해주세요";   
        pw2.focus();
        pw2.addEventListener('keyup',function(){
            if(pw2.value.match(PW2_CHECK) && pw1.value==pw2.value){
                pw2_alert.style.fontSize= '';
                pw2_alert.style.display= '';
                pw2_alert.style.color = '';
                pw2.style.borderColor="";
                pw2_alert.innerHTML="";
            }
        })
    } 
    else if(!names.value.match(NAME_CHECK)){
        name_alert.style.fontSize= '15px';
        name_alert.style.display= 'display';
        name_alert.style.color = 'red';
        names.style.borderColor="red";
        name_alert.innerHTML="이름을 다시입력해주세요";   
        names.focus();
        names.addEventListener('keyup',function(){
            if(names.value.match(NAME_CHECK)){
                name_alert.style.fontSize= '';
                name_alert.style.display= '';
                name_alert.style.color = '';
                names.style.borderColor="";
                name_alert.innerHTML="";
            }
        })
    } 
    else if(!phone.value.match(PHONENUMBER_CHECK)){
        // 전화번호 검사
        phone_alert.style.fontSize= '15px';
        phone_alert.style.display= 'display';
        phone_alert.style.color = 'red';
        phone.style.borderColor="red";
        phone_alert.innerHTML="핸드폰 번호를 다시입력해주세요";   
        phone.focus();
        phone.addEventListener('keyup',function(){
            if(phone.value.match(PHONENUMBER_CHECK)){
                phone_alert.style.fontSize= '';
                phone_alert.style.display= '';
                phone_alert.style.color = '';
                phone.style.borderColor="";
                phone_alert.innerHTML="";
            }
        })
    } 
    else if(!birth.value.match(BIRTH_CHECK)){
        birth_alert.style.fontSize= '15px';
        birth_alert.style.display= 'display';
        birth_alert.style.color = 'red';
        birth.style.borderColor="red";
        birth_alert.innerHTML="생일을 다시입력해주세요";   
        birth.focus();
        birth.addEventListener('keyup',function(){
            if(birth.value.match(BIRTH_CHECK)){
                birth_alert.style.fontSize= '';
                birth_alert.style.display= '';
                birth_alert.style.color = '';
                birth.style.borderColor="";
                birth_alert.innerHTML="";
            }
        })
    } 
    else if(!(male.checked || female.checked)){
        male_check.style.borderColor = 'red';
        gender_alert.style.color = 'red';
        female_check.style.borderColor = 'red';
        gender_alert.style.fontSize= '15px';
        gender_alert.style.display= 'block';
        gender_alert.innerHTML = "필수 입력 항목입니다.";
        
    }
    else if(!(agree[0].checked && agree[1].checked)){
        alert("약관 및 개인정보 동의해주세요");
    }
    else{
        alert("회원가입 완료.");
    } 
})

// 성별 라디오 버튼 미체크 시 코드는 정상적이지만
// 체크 시 코드는 미작동하여 따로 함수를 지정하고 onclick으로 함수를 불러와 적용했음. 
function gender_check(){
    if(male.checked){
        male_check.style.borderColor = 'gray';
        female_check.style.borderColor = '';
        gender_check_icon[0].style.display = 'block';
        gender_check_icon[1].style.display = '';
        gender_alert.style.display= '';
        gender_alert.innerHTML = "";
    } else if(female.checked){
        male_check.style.borderColor = '';
        female_check.style.borderColor = 'gray';
        gender_check_icon[1].style.display = 'block';
        gender_check_icon[0].style.display = '';
        gender_alert.style.display= '';
        gender_alert.innerHTML = "";
    }
}



















// ------------------------------------------------------------------------------
// const REGIST_CHECK = /(pass){9,9}/
//마지막 검증 때 배열에 pass가 9개 들어있나 확인

// let flag = ['fail', 'fail', 'fail', 'fail', 'fail', 'fail', 'fail', 'fail', 'fail']
// // 각 양식에 flag를 줘서 모두 pass가 될 경우 회원 가입 가능


// id.value = sessionStorage.id;
// //세션스토리지를 사용 (비밀번호와 주민등록번호에는 적용하지 않음)
// if (id.value === 'undefined') {
//     //세션스토리지에 undefined가 들어 있다면
//     //공백을 undefined가 뜨지않게 하기 위해서 공백을 넣음
//     id.value = '';
// } else {
//     id.value = sessionStorage.id;
// }

// if (typeof (Storage) !== "undefined") {
//     id.addEventListener('keyup', function () {
//         sessionStorage.id = id.value;
//         //value를 세션스토리지에 저장해서 새로고침돼도 남아 있도록 한다.
//         if (id.value.length == 0) {
//             id.nextElementSibling.innerHTML = '영문 혹은 숫자 (6~20자)'
//             id.nextElementSibling.style.color = 'rgb(24, 65, 199)'
//             flag[0] = 'fail';
//         } else if (ID_CHECK.test(id.value) != true) {
//             id.nextElementSibling.innerHTML = "영문 혹은 숫자가 아닙니다."
//             id.nextElementSibling.style.color = "crimson"
//             flag[0] = 'fail';
//         } else if (id.value.length > 20 || id.value.length < 6) {
//             id.nextElementSibling.innerHTML = "6~20자 사이로 입력해 주세요."
//             id.nextElementSibling.style.color = "orangered"
//             flag[0] = 'fail';
//         } else {
//             id.nextElementSibling.innerHTML = "사용 가능"
//             id.nextElementSibling.style.color = "rgb(19, 168, 99)"
//             flag[0] = 'pass';
//         }
//     })

//     pw.addEventListener('keyup', function () {
//         if (pw.value.length == 0) {
//             pw.nextElementSibling.innerHTML = '대문자를 포함한 영문, 특수문자, 숫자의 조합(8~16자)'
//             pw.nextElementSibling.style.color = 'rgb(24, 65, 199)'
//             flag[1] = 'fail';
//         } else if (PW_CHECK.test(pw.value) != true) {
//             pw.nextElementSibling.innerHTML = "대문자,특수문자,숫자를 반드시 하나 이상 포함해 주세요."
//             pw.nextElementSibling.style.color = "crimson"
//             flag[1] = 'fail';
//         } else if (pw.value.length > 16 || pw.value.length < 8) {
//             pw.nextElementSibling.innerHTML = "8~16자 사이로 입력해 주세요."
//             pw.nextElementSibling.style.color = "orangered"
//             flag[1] = 'fail';
//         } else {
//             pw.nextElementSibling.innerHTML = "사용 가능"
//             pw.nextElementSibling.style.color = "rgb(19, 168, 99)"
//             flag[1] = 'pass';
//         }
//     })

//     const eyeconSlash = document.querySelector('.slash')
//     const eyeconShow = document.querySelector('.show')
//     // 눈 아이콘

//     eyecon.addEventListener('click', function () {
//         if (pw.type == 'password') {
//             // input이 password 타입이면 text로 변경하고 그에 맞는 아이콘 활성화
//             pw.type = 'text'
//             pwCheck.type = 'text'
//             eyeconSlash.style.display = 'none'
//             eyeconShow.style.display = 'block'
//         } else {
//             pw.type = 'password'
//             pwCheck.type = 'password'
//             eyeconShow.style.display = 'none'
//             eyeconSlash.style.display = 'block'
//         }
//     })

//     pwCheck.addEventListener('keyup', function () {
//         if (pwCheck.value.length == 0) {
//             pwCheck.nextElementSibling.innerHTML = '비밀번호를 다시 한 번 입력해 주세요.'
//             pwCheck.nextElementSibling.style.color = 'rgb(24, 65, 199)'
//             flag[2] = 'fail';
//         } else if (pw.value != pwCheck.value) {
//             pwCheck.nextElementSibling.innerHTML = "입력하신 비밀번호와 일치하지 않습니다."
//             pwCheck.nextElementSibling.style.color = "crimson"
//             flag[2] = 'fail';
//         } else {
//             pwCheck.nextElementSibling.innerHTML = "입력하신 비밀번호와 일치합니다."
//             pwCheck.nextElementSibling.style.color = "rgb(19, 168, 99)"
//             flag[2] = 'pass';
//         }
//     })

//     nameCheck.value = sessionStorage.nameCheck;
//     if (nameCheck.value === 'undefined') {
//         nameCheck.value = '';
//     } else {
//         nameCheck.value = sessionStorage.nameCheck;
//     }
//     nameCheck.addEventListener('keyup', function () {
//         sessionStorage.nameCheck = nameCheck.value;
//         if (nameCheck.value.length == 0) {
//             nameCheck.nextElementSibling.innerHTML = '한글, 영어로만 입력'
//             nameCheck.nextElementSibling.style.color = 'rgb(24, 65, 199)'
//             flag[3] = 'fail';
//         } else if (NAME_CHECK.test(nameCheck.value) != true) {
//             nameCheck.nextElementSibling.innerHTML = "이름은 영문 혹은 한글로만 입력해 주세요."
//             nameCheck.nextElementSibling.style.color = "crimson"
//             flag[3] = 'fail';
//         } else if (nameCheck.value.length < 2) {
//             nameCheck.nextElementSibling.innerHTML = "2글자 이상 입력해 주세요."
//             nameCheck.nextElementSibling.style.color = "orangered"
//             flag[3] = 'fail';
//         } else {
//             nameCheck.nextElementSibling.innerHTML = "사용 가능"
//             nameCheck.nextElementSibling.style.color = "rgb(19, 168, 99)"
//             flag[3] = 'pass';
//         }
//     })


//     let now = new Date();
//     let nowYear = now.getFullYear();
//     // 연도를 받아서 변수에 저장

//     year.value = sessionStorage.year;
//     if (year.value === 'undefined') {
//         year.value = '';
//     } else {
//         year.value = sessionStorage.year;
//     }

//     year.addEventListener('keyup', function () {
//         sessionStorage.year = year.value
//         if (NUM_CHECK.test(year.value) != true) {
//             birthText.innerHTML = '연도는 숫자로 입력해 주세요.'
//             birthText.style.color = "crimson"
//             flag[4] = 'fail';
//         } else if (year.value > nowYear) {
//             birthText.innerHTML = '연도가 ' + nowYear + '년을 넘었습니다.'
//             birthText.style.color = "orangered"
//             flag[4] = 'fail';
//         } else if (year.value.length == 4) {
//             birthText.innerHTML = '완료'
//             birthText.style.color = "rgb(19, 168, 99)"
//             flag[4] = 'pass';
//         } else {
//             birthText.innerHTML = '숫자로만 입력해 주세요.'
//             birthText.style.color = 'rgb(24, 65, 199)'
//             flag[4] = 'fail';
//         }
//     })

//     day.value = sessionStorage.day;
//     if (day.value === 'undefined') {
//         day.value = '';
//     } else {
//         day.value = sessionStorage.day;
//     }

//     day.addEventListener('keyup', function () {
//         sessionStorage.day = day.value
//         // console.log(day.value)
//         if (NUM_CHECK.test(day.value) != true) {
//             birthText.innerHTML = '일자는 숫자로 입력해 주세요.'
//             birthText.style.color = "crimson"
//             flag[5] = 'fail';
//         } else if (day.value.length == 0) {
//             birthText.innerHTML = '숫자로만 입력해 주세요.'
//             birthText.style.color = 'rgb(24, 65, 199)'
//             flag[5] = 'fail';
//         } else if (day.value > 31 || day.value < 1) {
//             birthText.innerHTML = '일자의 범위가 잘못 됐습니다.'
//             birthText.style.color = "orangered"
//             flag[5] = 'fail';
//         } else {
//             birthText.innerHTML = '사용 가능'
//             birthText.style.color = "rgb(19, 168, 99)"
//             flag[5] = 'pass';
//         }
//     })

//     const male = document.querySelector('.male')
//     const female = document.querySelector('.female')

//     identity.addEventListener('keyup', function () {
//         // console.log(IDENTITY_CHECK.test(identity.value))
//         if (identity.value.length == 0) {
//             identity.nextElementSibling.innerHTML = '하이픈(-)을 포함해서 입력해 주세요.'
//             identity.nextElementSibling.style.color = 'rgb(24, 65, 199)'
//             flag[6] = 'fail';
//         } else if (IDENTITY_CHECK.test(identity.value) != true) {
//             identity.nextElementSibling.innerHTML = "주민등록 번호를 제대로 입력해 주세요."
//             identity.nextElementSibling.style.color = "crimson"
//             flag[6] = 'fail';
//         } else if (identity.value.split("")[7] == 1 || identity.value.split("")[7] == 3) {
//             //하이픈 뒤 첫 숫자가 1,3일 때 남자 표시를 띄움
//             male.style.visibility = 'visible'
//             female.style.visibility = 'hidden'
//             identity.nextElementSibling.innerHTML = "사용 가능"
//             identity.nextElementSibling.style.color = "rgb(19, 168, 99)"
//             flag[6] = 'pass';
//         } else if (identity.value.split("")[7] == 2 || identity.value.split("")[7] == 4) {
//             //하이픈 뒤 첫 숫자가 2,4일 때 여자 표시를 띄움
//             female.style.visibility = 'visible'
//             male.style.visibility = 'hidden'
//             identity.nextElementSibling.innerHTML = "사용 가능"
//             identity.nextElementSibling.style.color = "rgb(19, 168, 99)"
//             flag[6] = 'pass';
//         }
//     })

//     mail.value = sessionStorage.mail;
//     if (mail.value === 'undefined') {
//         mail.value = '';
//     } else {
//         mail.value = sessionStorage.mail;
//     }

//     mail.addEventListener('keyup', function () {
//         sessionStorage.mail = mail.value
//         // console.log(MAIL_CHECK.test(mail.value))
//         if (mail.value.length == 0) {
//             mail.nextElementSibling.innerHTML = '@를 포함한 이메일 양식에 맞게 작성해 주세요.'
//             mail.nextElementSibling.style.color = 'rgb(24, 65, 199)'
//             flag[7] = 'fail';
//         } else if (MAIL_CHECK.test(mail.value) != true) {
//             mail.nextElementSibling.innerHTML = '양식에 맞게 작성해 주세요. Ex) abcd123@naver.com '
//             mail.nextElementSibling.style.color = 'crimson'
//             flag[7] = 'fail';
//         } else {
//             mail.nextElementSibling.innerHTML = '사용 가능'
//             mail.nextElementSibling.style.color = "rgb(19, 168, 99)"
//             flag[7] = 'pass';
//         }
//     })

//     phone.value = sessionStorage.phone;
//     if (phone.value === 'undefined') {
//         phone.value = '';
//     } else {
//         phone.value = sessionStorage.phone;
//     }

//     phone.addEventListener('keyup', function () {
//         sessionStorage.phone = phone.value
//         if (phone.value.length == 0) {
//             phone.nextElementSibling.innerHTML = '하이픈(-)을 포함해서 입력해 주세요.'
//             phone.nextElementSibling.style.color = 'rgb(24, 65, 199)'
//             flag[8] = 'fail';
//         } else if (PHONENUMBER_CHECK.test(phone.value) != true) {
//             phone.nextElementSibling.innerHTML = '번호를 정확히 입력해 주세요'
//             phone.nextElementSibling.style.color = 'crimson'
//             flag[8] = 'fail';
//         } else {
//             phone.nextElementSibling.innerHTML = '사용 가능'
//             phone.nextElementSibling.style.color = "rgb(19, 168, 99)"
//             flag[8] = 'pass';
//         }
//     })

//     regist.addEventListener('click', function () {
//         let lastCheck = '';
//         for (let i = 0; i < flag.length; i++) {
//             lastCheck += flag[i]
//             //flag에 들어있는 배열의 값들을 변수에 저장
//         }
//         console.log(flag)
//         console.log(lastCheck)

//         if (REGIST_CHECK.test(lastCheck) != true) {
//             alert("가입 양식을 다시 한번 체크해 주세요.")
//         } else {
//             alert("가입을 축하합니다.")
//             //lastCheck에 들어있는 값이 모두 pass라면 통과
//         }
//     })
// }