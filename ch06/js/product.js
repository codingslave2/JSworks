let bigPic = document.getElementById("cup");
let smallPics = document.querySelectorAll(".small");

    //smallPick[i].onclick = showBig; // showSmall() 호출
    //addEventListener() 이벤트 처리기(접두어 'on'을 붙이지 않음)

for(let i=0; i<smallPics.length; i++){
    smallPics[i].addEventListener("click", showBig);
}

function showBig(){
    console.log(this.src); //클릭한 대상
    bigPic.setAttribute("src", this.src);
}


//상세 설명 보기
let view = document.getElementById("view");
let detail = document.getElementById("detail");

//토글 프로그래밍
let sw = true;

view.addEventListener("click", function(){
    if(sw){
        detail.style.display = "block";
        view.innerText = "상세 설명 닫기";
        sw = false;
    }
    else{}
        detail.style.display = "block";
        view.innerText = "상세 설명 보기";
        sw = true;
}
)