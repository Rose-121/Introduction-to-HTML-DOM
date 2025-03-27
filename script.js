function validate(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;

  const pass = document.getElementById("password").value;

  const age = document.getElementById("age").value;

  const msgBox = document.getElementById("message");

  let message = "";

  if (email === "") {
    message = "Please Enter an Email";
    msgBox.style.color = "red";
  } else if (pass === "") {
    message = "Password must nbe =atleast 8 charecter";
    msgBox.style.color = "red";
  } else if (age === "") {
    message = "Age must be Between 12 - 50";
    msgBox.style.color = "red";
  } else {
    message = "Logiun Successful";
    msgBox.style.color = "green";
  }
  msgBox.innerText = message;
}
