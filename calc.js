let a = ""; // first num
let b = ""; // second num
let sign = ""; // знак опреации

let finish = false;

const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const action = ["-", "+", "X", "/"];

// экран
const out = document.querySelector(".calc-screen p");

function clearAll() {
  a = "";
  b = "";
  sign = "";
  finish = false;
  out.textContent = 0;
}

const ac = document.querySelector(".ac");
ac.addEventListener("click", clearAll);

document.querySelector(".buttons").addEventListener("click", (event) => {
  //нажата не нопка
  if (!event.target.classList.contains("btn")) return;
  // нажата кнопка clearAll
  if (event.target.classList.contains("ac")) return;

  out.textContent = "";
  // получаем нажатую кнопку
  const key = event.target.textContent;

  // если нажата кнопка 0-9 или .
  if (digit.includes(key)) {
    if (b === "" && sign === "") {
      a += key;
      out.textContent = a;
    } else if (a !== "" && b !== "" && finish) {
      b = key;
      finish = false;
      out.textContent = b;
    } else {
      b += key;
      out.textContent = b;
    }
    return;
  }

  // если нажата клавиша + - / *
  if (action.includes(key)) {
    sign = key;
    out.textContent = sign;
    return;
  }
  // нажато =
  if (key === "=") {
    if (b === "") b = a;
    switch (sign) {
      case "+":
        a = +a + +b;
        break;  
      case "-":
        a = a - b;
        break;
      case "X":
        a = a * b;
        break;
      case "/":
        if (b === "0") {
          out.textContent = "error";
          a = "";
          b = "";
          sign = "";
          return;
        }
        a = a / b;
        break;
    }
    finish = true;
    out.textContent = a;
  } else if(key === '%'){
      switch(sign){
        case 'X':
          a = a * b/100;
      }
      finish = true;
      out.textContent = a;
  }
});
