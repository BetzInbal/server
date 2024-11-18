import { voteService } from "../services/votes";
import { Request, Response} from "express";



export const vote = async (req: Request, res: Response) => {
    try {
      const can = await voteService({candidId:req.params.id,userId:(req as any).user.user_id});
      res.json(can).status(201);
    } 
    catch (err) {
      console.log(err);
      res.sendStatus(400);
    }
  };