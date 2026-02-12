import { Router } from "express";
import routesV1 from "./v1/index.js";
import logger from "../utility/logger.js";
const router = Router();

router.use("/api/v1", routesV1);
router.get("/", (req, res) => {
  logger.info("Root endpoint hit", {
    method: req.method,
    path: req.path,
  });
  res.status(200).send({ success: true, message: "Testing API..." });
});
export default router;
