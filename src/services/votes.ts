import jwt from "jsonwebtoken";
import Users, { IUser, userSchema } from "../models/userSchema";
import Candidate, { ICandidate } from "../models/candidateSchema";
import { Schema } from "mongoose";
import VoteDto from "../types/VoteDto";

export const voteService = async ({userId, candidId}:VoteDto) => {
    try {
        
        const user:IUser|null = await Users.findOne({_id:userId})
        if (!user) throw new Error('user not found')
        if (user.hasVoted) throw new Error('user all redy voeted')

        const candidate:ICandidate|null = await Candidate.findOne({_id:candidId})
        if (!candidate) throw new Error('candidate not found')
        user.hasVoted=true
        user.votedFor=candidate._id as Schema.Types.ObjectId 
        candidate.votes +=1
        user.save()
        candidate.save()
        return true
    } catch (err) {
      console.log(
        "Error accured while creating initial state of userSchema",
        err
      );
    }
  };