// HTML elements
const fname = document.querySelector(".form input[name='fname']");
const lname = document.querySelector(".form input[name='lname']");
const email = document.querySelector(".form input[name='email']");
const password = document.querySelector(".form input[name='password']");
const form = document.querySelector(".form form");

// Validate on submit
form.addEventListener("submit", (e) => {
  let messages = {fname: "", lname: "", email: "", password: ""};
  console.log(messages);
  if (fname.value === "" || fname.value == null) {
    messages.fname = "First Name cannot be empty";
  }
  if (lname.value === "" || lname.value == null) {
    messages.lname = "Last Name cannot be empty";
  }
  if (email.value === "" || email.value == null) {
    messages.email = "Email cannot be empty";
  } else if (!email.value.match(/([a-zA-Z0-9+._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/)) {
    messages.email = "Looks like this is not an email";
  }
  if (password.value === "" || password.value == null) {
  messages.password = "Password cannot be empty";
  }
  if (Object.values(messages).some(val => val !== "")) {
    e.preventDefault();
    for (const [key, value] of Object.entries(messages)) {
        if (value !== "") {
            const errorMessage = document.querySelector(`.form .${key}-error`);
            errorMessage.innerText = value;
            errorMessage.setAttribute("aria-hidden", "false");
            errorMessage.parentElement.classList.add("error");
        }
      }
  }
});

// Remove error class when input is focused
form.querySelectorAll("input").forEach(div => {
    div.addEventListener("focus", (e) => {
        if (e.target.closest("div").classList.contains("error"))
        e.target.nextElementSibling.setAttribute("aria-hidden", "true");
        e.target.closest("div").classList.remove("error");
    })
})
