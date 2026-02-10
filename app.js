import "dotenv/config";
import express from "express";
import cors from "cors";

import serverConfig from "./config/server.config.js";

const app = express();

//middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/test", (req, res) => {
  res.status(200).send({
    success: true,
    message: "Testing API....",
  });
});

app.listen(serverConfig.PORT, () => {
  console.log(`Server is running on port ${serverConfig.PORT}`);
});
