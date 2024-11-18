import { Router } from "express";
import { getListrouter, sid } from "../routes/candidate";
import verifyUser from "../middlewares/verifyUser";


const router = Router()

router.post('/sid', sid)
router.get('/', verifyUser, getListrouter)


export default router