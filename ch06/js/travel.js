// 아이템 리스트
let itemList = [];

let addBtn = document.getElementById("add");
addBtn.addEventListener("click", addList);

// 아이템 추가 함수
function addList() {
  let item = document.getElementById("item").value;

  itemList.push(item);
  document.getElementById("item").value = "";
  document.getElementById("item").focus();

  showList();
}

function showList() {
  let list = "<ul>";
  for (let i = 0; i < itemList.length; i++) {
    list += "<li>" + itemList[i] + "<span class='close' id=" + i +">X</span></li>"; //닫는 버튼 표시
  }
  list += "</ul>";
  document.getElementById("itemList").innerHTML = list;

  // 아이템 삭제
  // X를 선택
  let removeList = document.querySelectorAll(".close");

  for(let i=0; i<removeList.length; i++){
    removeList[i].addEventListener("click", remove);
  }
  
  function remove() {
    let id = this.getAttribute("id");
    itemList.splice(id, 1);
    showList();
  }
}
