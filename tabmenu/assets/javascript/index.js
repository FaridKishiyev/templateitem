const btn1 = document.getElementById("li1");
const btn2 = document.getElementById("li2");
const btn3 = document.getElementById("li3");
const ehmed = document.getElementById("ehmed");
const ilkin = document.getElementById("ilkin");
const elgun = document.getElementById("elgun");

btn1.addEventListener("click", click1);
btn2.addEventListener("click", click2);
btn3.addEventListener("click", click3);
function click1() {
  ehmed.style.display = "block";
  ilkin.style.display = "none";
  elgun.style.display = "none";
  btn1.style.borderTop = "1px solid black";
  btn1.style.borderLeft = "1px solid black";
  btn1.style.borderRight = "1px solid black";
  btn2.style.border = "none";
  btn3.style.border = "none";
}

function click2() {
  ilkin.style.display = "block";
  ehmed.style.display = "none";
  elgun.style.display = "none";
  btn2.style.borderTop = "1px solid black";
  btn2.style.borderLeft = "1px solid black";
  btn2.style.borderRight = "1px solid black";
  btn1.style.border = "none";
  btn3.style.border = "none";
}

function click3() {
  elgun.style.display = "block";
  ehmed.style.display = "none";
  ilkin.style.display = "none";
  btn3.style.borderTop = "1px solid black";
  btn3.style.borderLeft = "1px solid black";
  btn3.style.borderRight = "1px solid black";
  btn1.style.border = "none";
  btn2.style.border = "none";
}
