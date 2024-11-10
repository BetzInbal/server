import {connect} from 'mongoose'

export const connectToMogo = async ( ) => {

    try {
        await connect('mongodb://localhost:27017/election')
        console.log('connected to mongo');
        
    } catch (error) {
        console.log(error);
        
        
    }
}