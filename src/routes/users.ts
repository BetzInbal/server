import { Request, Response} from "express";
import { ReqWithBody } from "../types/ReqWithBody";
import { createUser, getUserService, userLogin } from "../services/users";



export const register = async (req:Request<{},{},>, res:Response)=> {
    try {
        console.log(req.body);
        
        await createUser(req.body)
        res.status(201).send()
        
    } catch (error) {
        console.log(error);
        res.sendStatus(400);       
    }

}


export const login = async (req:ReqWithBody, res:Response)=> {
    try {        
        const tru = await userLogin(req.body)        
        res.json(tru).status(201)
        
    } catch (error) {
        console.log(error);
        res.sendStatus(400);       
    }

}

export const getUser = async (req:ReqWithBody, res:Response)=> {
    try {        
        const user = await getUserService((req as any).user.user_id)        
        res.json(user).status(200)
        
    } catch (error) {
        console.log(error);
        res.json(error as string).sendStatus(400);       
    }
}