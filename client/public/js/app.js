// const loginBtn = document.getElementById(`loginBtn`);
// const signupBtn = document.getElementById(`signupBtn`);

import { response } from "express";

// console.log(loginBtn);

// loginBtn.addEventListener("click", () => {
//   console.log("login btn clicked");

//   window.location.href = "/users/login";
// });

const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(signupForm);

  fetch("users/signupNewUser", {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to sign up");
      }
    })
    .then((data) => {
      console.log(data);
      alert("User signed up successfully");
    })
    .catch((error) => {
      console.log(error);
      alert("Failed to sign up");
    });
});
