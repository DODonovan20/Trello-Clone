import express from "express";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

//import routes
import indexRouter from "./server/routes/index.js";

const app = express();
const PORT = process.env.SERVERPORT || 3000;

const __filename = import.meta.url;
const __dirname = path.dirname(__filename);

//use routes
app.use("/", indexRouter);
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
