import { Router } from "express";
import { logouth, register, login} from "../routes/users";


const router = Router()

router.post('/login', login)

router.post('/register', register)

router.post('/logouth',logouth)





export default router