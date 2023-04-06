//유효성 검사
function checkMemeber(){
    let form = document.regform;
    let id = document.regform.user-id;
    let pwd1 = document.regform.user-pwd1;
    let pwd2 = document.regform.user-pwd2;

    if(id.value.length < 4){
        alert("아이디는 4~15자까지 가능합니다.");
        id.select();
        return false;
    }else if(pwd1.value.length < 8 ){
        alert("비밀번호는 영문자, 숫자 포함 8자 이상입니다.");
        pwd1.select();
        return false;
    }else if(pwd1.value != pwd2.value){
        alert("비밀번호는 동일해야 합니다.");
        pwd2.select();
        return false;
    }else{
        form.submit();
    } 
}