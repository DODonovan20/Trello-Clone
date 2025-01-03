import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "../../");

const usersRouter = express.Router();

usersRouter.get("/login", (req, res) => {
  const loginPath = path.join(rootDir, "client", "html", "login.html");
  res.sendFile(path.join(loginPath));
});

export default usersRouter;
