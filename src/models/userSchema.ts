import { Schema, Types, Document, model } from "mongoose"

export interface IUser extends Document {
    username:string
    password:string
    isAdmin:boolean
    hasVoted:boolean
    votedFor:Schema.Types.ObjectId | null

}

const userSchema = new Schema<IUser>({
    username:{
        type:String,
        unique:true
    },
    password:String,
    isAdmin:{type:Boolean, default:false},
    hasVoted:{type:Boolean, default:false},
    votedFor:{type:Schema.Types.ObjectId,
        ref:'candidate',
    default:null}

})

export default model<IUser>('User', userSchema)