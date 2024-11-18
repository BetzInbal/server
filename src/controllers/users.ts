import { Router } from "express";
import { register, login, getUser} from "../routes/users";
import verifyUser from "../middlewares/verifyUser";


const router = Router()

router.post('/login', login)

router.post('/register', register)

router.post('/', verifyUser,getUser)





export default router