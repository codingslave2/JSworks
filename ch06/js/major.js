function displaySelect(){
    // select 태그 이름에 폼 이름으로 접근
    var selectMenu = document.testForm.major;

    // select option 속성의 인덱스로 선택
    var selectedText = selectMenu.options[selectMenu.selectedIndex].innerText;
    alert(selectedText + "가 선택 되었습니다.");

    //id 선택자로 처리
    // var selectedText = document.getElementById("major").value;
    // alert(selectedText + "가 선택 되었습니다.");
}
