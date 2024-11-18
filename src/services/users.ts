import jwt from "jsonwebtoken";
import Users, { IUser } from "../models/userSchema";
import { GeneralDto } from "../types/GeneralDto";
import bcrypt from 'bcrypt'
import { Schema } from "mongoose";

export const createUser = async (userDto:GeneralDto) => {
  try {
    if (!userDto.password) throw new Error('paswors mast by provaided')
    userDto.password = await bcrypt.hash(userDto.password!, 10)
      const newUser:IUser = new Users(userDto);
      await newUser.save();
    
  } catch (err) {
    console.log(
      "Error accured while creating initial state of userSchema",
      err
    );
    throw new Error(err as string)
  }
};

export const userLogin = async (userDto:GeneralDto) => {
    try {
        const user = await Users.findOne({username:userDto.username}).lean()
        if (!user) throw new Error('user not found')
       if( !await bcrypt.compare(userDto.password!, user.password)) throw new Error('user not found')        
        const token = jwt.sign({user_id:user._id,
      isAdmin:user.isAdmin,
      username:user.username
    }, process.env.SECRET!,
    {expiresIn: "10m"})
        
        return {...user, token, password:'❌❌❌❌'}
    } catch (err) {
      console.log(
        "Error accured while creating initial state of userSchema",
        err
      );
    }
  };


  export const getUserService = async (userId:string ) => {
    try {
        const user = await Users.findOne({_id:userId}).lean()
        if (!user) throw new Error('user not found')
        
        return Users
    } catch (err) {
      console.log(
        "Error accured while creating initial state of userSchema",
        err
      );
      return err
    }
  };