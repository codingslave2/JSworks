//배열의 알파벳 대문자 저장
let alphabet = new Array(26);
let char = 'A'; 


//아스키 코드를 찾는 함수 - 객체.charCodeAt()
char = char.charCodeAt(0); // 0번 인덱스
console.log(char); // code - 65 (ASCCI-아스키코드)

char++; // char = char + 1

console.log(char);

//문자로 출력해주는 함수 String.fromCharCode(ch)
console.log(String.fromCharCode(char))

//배열에 지정 입력
/* 
alphabet[0] = ch
alphabet[1] = ch1
alphabet[2] = ch2

*/

//저장(입력)
for(var i=0; i<alphabet.length; i++){
    alphabet[i] = char;
    char++
    document.write(alphabet[i] + ", "
    + String.fromCharCode(alphabet[i]) + "<br>");


}

//출력
