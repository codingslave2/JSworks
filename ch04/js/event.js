function showText(){
//     let text = document.getElementById("detail");
//     text.style.display = "block"; //css의 style 속성 접근

document.getElementById("detail").style.display = "block"; //설명글 보이기

//let btn = document.getElementById("show"); //보기 버튼 숨기기
//btn.style.display = "none";
document.getElementById('show').style.display = "none"
}

//상세 설명 닫기
function hideText(){
    document.getElementById("detail").style.display = "none"; //설명글 숨기기

    document.getElementById('show').style.display = "block"; //보기 버튼 보이기
}