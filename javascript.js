function buyButton() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email?");
  if (name.length)
    alert(
      "Thanks, " +
        name +
        " " +
        "we will be in touch. Meanwhile have a lot of Icecream!🍨"
    );
  else {
    alert("No name, No Vanilla Icecream for you🙁");
  }
}

let bButton = document.querySelector("Button");
bButton.addEventListener("click", buyButton);
