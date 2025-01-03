import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "../../");

const indexRouter = express.Router();

indexRouter.get("/", (req, res) => {
  const indexPath = path.join(rootDir, "client", "index.html");
  res.sendFile(path.join(indexPath));
});

export default indexRouter;
