import express from "express";
import { infoHandler } from "./handlers/info";

const port = process.env.PORT || 8080;

const app = express();

app.get("/info", infoHandler);

app.listen(port, () => {
  console.log(`The application is listening on port ${port}!`);
});
