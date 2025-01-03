import { log } from "console";

const loginBtn = document.getElementById(`loginBtn`);
const signupBtn = document.getElementById(`signupBtn`);

console.log(loginBtn);

loginBtn.addEventListener("click", () => {
  console.log("login btn clicked");

  window.location.href = "/login";
});
