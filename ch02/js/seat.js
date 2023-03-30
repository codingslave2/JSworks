// 입장객 수에 따른 좌석의 줄 수 계산
let customer = prompt("입장객은 몇 명인가요? "); //입장객 수
let colNum = prompt("한 줄에 몇 명씩 앉나요? "); //열의 수
let rowNum; // 행(줄)의 수

//나머지의 유무 처리
if (customer == null || colNum == null) {
    document.write("입력이 취소되었습니다.");
} else {
    if (parseInt(customer) % parseInt(colNum) == 0) {
        rowNum = customer / colNum;
    } else {
        rowNum = parseInt(customer / colNum) + 1;
    }
    document.write(rowNum + "개의 줄이 필요합니다." + "<br>");
}
document.write("<table>")
for (var i = 0; i < rowNum; i++) {
    document.write("<tr>")
    for (var j = 1; j <= colNum; j++) {
        var seatNum = colNum * i + j;
        if (seatNum > customer) { //좌석 번호가 고객 수보다 클 때 빠져나옴
            break;
        }
        document.write("<td>좌석" + seatNum + "</td>");
    }
    document.write("<br>");

    document.write("</tr>")
}
document.write("</table>")