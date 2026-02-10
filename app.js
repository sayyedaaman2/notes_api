import "dotenv/config";
import express from "express";
import cors from "cors";

import serverConfig from "./config/server.config.js";
import rootRoutes from './routes/index.js'
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




app.use(rootRoutes);

app.use((err, req, res, next) => {
  const status = err.status || 500;

  res.status(status).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});



app.listen(serverConfig.PORT, () => {
  console.log(`Server is running on port ${serverConfig.PORT}`);
});
