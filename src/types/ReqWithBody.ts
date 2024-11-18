import { Request } from "express";
import { GeneralDto } from "./GeneralDto";

export interface ReqWithBody  extends Request {
    body:GeneralDto
}