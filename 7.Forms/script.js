// Display your firstName in Span
let firstInputField = document.getElementById("firstname");
firstInputField.onkeyup = function () {
  let x = document.getElementById("firstname").value;
  document.getElementById("display-firstname").innerHTML = x;
  console.log(x);
};

// If you're an adult, display the secret message
let numberInputField = document.getElementById("age");
numberInputField.onkeyup = function () {
  let age = numberInputField.value;

  if (age > 18) {
    document.getElementById("a-hard-truth").style.visibility = "visible";
  }
};

// Add a visual hint if password is too short or if the password and its confirmation do not match
let pwd = document.getElementById("pwd");
let pwdConfirm = document.getElementById("pwd-confirm");

pwd.onkeyup = function () {
  if (pwd.value.length <= 6) {
    pwd.style.backgroundColor = "red";
    alert("Password is too short");
  } else {
    pwd.style.backgroundColor = "initial";
  }
};

pwdConfirm.onkeyup = function () {
  if (pwdConfirm.value != pwd.value) {
    pwdConfirm.style.backgroundColor = "red";
  } else {
    pwdConfirm.style.backgroundColor = "initial";
  }
};

// Add a Dark Mode
let darkMode = document.getElementById("toggle-darkmode");

darkMode.addEventListener("change", () => {
  if (darkMode.value === "dark") {
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector("body").style.color = "white";
  } else if (darkMode.value === "light"){
    document.querySelector("body").style.backgroundColor = "white";
    document.querySelector("body").style.color = "black";
  }
  console.log(darkMode.value);
});
