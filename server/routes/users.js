import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { registerNewUser } from "../controllers/userController.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "../../");

const usersRouter = express.Router();

usersRouter.get("/login", (req, res) => {
  console.log("handling login page route");

  const loginPath = path.join(rootDir, "client", "html", "login.html");
  console.log(loginPath);

  res.sendFile(loginPath);
});

usersRouter.get("/signup", (req, res) => {
  console.log("handling signup page route");

  const signupPath = path.join(rootDir, "client", "html", "signup.html");
  res.sendFile(signupPath);
});

usersRouter.post("/signupNewUser", registerNewUser);

export default usersRouter;
