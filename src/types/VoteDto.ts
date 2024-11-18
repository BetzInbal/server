import { Schema } from "mongoose";

export default interface VoteDto {
    userId: string | Schema.Types.ObjectId
    candidId: string | Schema.Types.ObjectId
}