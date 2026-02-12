import "dotenv/config";
import express from "express";
import cors from "cors";

import serverConfig from "./config/server.config.js";
import rootRoutes from "./routes/index.js";
import logger from "./utility/logger.js";

const app = express();

/* -------------------- Core Middlewares -------------------- */
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* -------------------- Request Logger (MUST be before routes) -------------------- */
app.use((req, res, next) => {
  const start = Date.now();

  res.on("finish", () => {
    logger.info("Request completed", {
      method: req.method,
      path: req.originalUrl,
      status: res.statusCode,
      durationMs: Date.now() - start,
      ip: req.ip,
    });
  });

  next();
});

/* -------------------- Health/Test Route -------------------- */
app.get("/test", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Testing API....",
  });
});

/* -------------------- Routes -------------------- */
app.use(rootRoutes);

/* -------------------- 404 Handler -------------------- */
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

/* -------------------- Global Error Handler -------------------- */
app.use((err, req, res, next) => {
  const status = err.status || 500;

  logger.error("Unhandled API error", {
    method: req.method,
    path: req.originalUrl,
    status,
    message: err.message,
    stack: err.stack,
  });

  res.status(status).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

/* -------------------- Server Start -------------------- */
app.listen(serverConfig.PORT, () => {
  logger.info("Server started", {
    port: serverConfig.PORT,
    env: process.env.NODE_ENV,
  });
});
