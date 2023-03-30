// 변수의 값을 교환하기
let x = 0, y = 1;
let temp;

document.write("<br>--- 교환전 ---<br>");
document.write("x=" + x, "y=" + y);


// 교환 처리

temp = x; //temp = 0
x = y; // x = 1;
b = temp; // y = 0;
console.log(x);
console.log(y);



// document.write("<br>===============<br>");

// document.write("<br>--- 교환후 ---<br>");
// document.write("x=" + x, "y=" + y);