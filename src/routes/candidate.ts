import { Request, Response } from "express";
import { getList, initDatabase } from "../services/candidate";

export const sid = async (req: Request, res: Response) => {
  try {
    await initDatabase();
    res.sendStatus(201);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

export const getListrouter = async (req: Request, res: Response) => {
    try {
      const can = await getList();
      res.json(can).status(201);
    } catch (err) {
      console.log(err);
      res.sendStatus(400);
    }
  };