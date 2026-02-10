import {Router} from 'express'
import routesV1 from './v1/index.js'
const router = Router();

router.use("/api/v1",routesV1)
router.get("/",(req,res)=> res.status(200).send({success : true, message : 'Testing API...'}))
export default router;