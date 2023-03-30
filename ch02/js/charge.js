// 놀이공원 입장료 계산
let age = prompt("나이를 입력하세요." , "1")
let charge;

// if문 처리
if(age < 8){
document.write("취학전 아동입니다.<br>")
charge = 1000;
// document.write("입장료는 <span>" + charge + "원</span>입니다.")
}
else if(age >= 8 && age < 14){
document.write("초등학생 입니다.<br>")
charge = 2000;
// document.write("입장료는 <span>" + charge + "원</span>입니다.")
}

else if(age >= 14 && age < 20){
document.write("청소년 입니다.<br>")
charge = 2500;
// document.write("입장료는 <span>" + charge + "원</span>입니다.")
}

else{
document.write("일반인 입니다.<br>")
charge = 3000;
}

document.write("입장료는 <span class='access'>" + charge + "원</span>입니다.")