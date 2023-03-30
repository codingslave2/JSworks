let n1 = prompt("첫 번째 수 입력: ", "1~50");
let n2 = prompt("두 번째 수 입력: ", "1~50");

let sum_v = 0;

sum_v = parseFloat(n1) + parseFloat(n2);

// toFixed() = 소숫점 자리수 설정함수
// 
document.write("두 수의 합 : " + sum_v.toFixed(2));