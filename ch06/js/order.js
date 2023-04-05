//체크 박스 속성에 이벤트 처리하기
let check = document.querySelector("#shippingInfo");

check.addEventListener("click", checkbox);

let billingName = document.getElementById("billingName");
let billingTel = document.getElementById("billingTel");
let billingAddr = document.getElementById("billingAddr");

let shippingName = document.getElementById("shippingName");
let shippingTel = document.getElementById("shippingTel");
let shippingAddr = document.getElementById("shippingAddr");

function checkbox(){
    if(check.checked == true){
        shippingName.value = billingName.value;
        shippingTel.value = billingTel.value;
        shippingAddr.value = billingAddr.value;
    }else{
        shippingName.value = "";
        shippingTel.value = "";
        shippingAddr.value = "";
    }
}