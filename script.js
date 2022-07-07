let screen = document.getElementById("screen");
let buttons = document.querySelectorAll("button");

let clickk = "";
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    console.log(buttonText);
    if (buttonText == "C") {
      clickk = "";
      screen.value = clickk;
    } else if (buttonText == "=") {
      screen.value = eval(clickk);
      clickk = screen.value;
    } else if (buttonText == "X") {
      screen.value = screen.value.slice(0, -1);
      clickk = screen.value;
    } else {
      clickk += buttonText;
      screen.value = clickk;
    }
  });
});

window.addEventListener("keydown", (event) => {
  if (clickk.includes(event.key)) {
    screen.value += event.key;
  } else if (event.key === "=") {
    screen.value = eval(screen.value);
  } else if (event.key === "Backspace") {
    screen.value.slice(0, screen.value.length - 1);
  }
});

const read = () => {
  let colorcode = "#";
  const char = "0123456789abcdef";

  for (let index = 0; index < 6; index++) {
    const randnum = Math.floor(Math.random() * 16);

    let randchar = char[randnum];
    colorcode += randchar;
  }
  document.body.style.backgroundColor = colorcode;
  const para = document.querySelector("p");
};

const button = document.getElementById("poo");
button.addEventListener("click", () => {
  read();
});

window.addEventListener("DOMContentLoaded", () => {
  read();
});
