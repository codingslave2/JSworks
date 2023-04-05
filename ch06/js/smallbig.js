let bigPic = document.getElementById("cup");
let smallPics = document.querySelectorAll(".small");

    //smallPick[i].onclick = showBig; // showSmall() 호출
    //addEventListener() 이벤트 처리기(접두어 'on'을 붙이지 않음)

for(let i=0; i<smallPics.length; i++){
    smallPics[i].addEventListener("mouseover", showBig);
}

function showBig(){
    console.log(this.src); //클릭한 대상
    bigPic.setAttribute("src", this.src);
}
