function prinGugu(){
let strN = document.getElementById("myNum").value;
let n = parseInt(strN);
document.getElementById("x").innerHTML = n;

for(var i=0; i <= 9; i++){
    let newDiv = document.createElement("div");
    let text = document.createTextNode(n + "x" + i + "=" + (n * i));
    newDiv.appendChild(text);
    document.getElementById("demo").appendChild(newDiv);

}
}