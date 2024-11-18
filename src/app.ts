import express from 'express'
import 'dotenv/config'
import cors from "cors"
import userController from './controllers/users'
import adminController from './controllers/admin'
import votesController from './controllers/votes'
import candidatesController from './controllers/candidates'
import { connectToMogo } from './config/db'
import http from 'http'
import { Server,} from 'socket.io'
import { hendelSocketConnetion, hendelSocketnewVote } from './socket/io'

const PORT = process.env.PORT || 3000
const app = express()
const httpserver = http.createServer(app)
export const io = new Server(httpserver,{
    cors:{
        origin:'*',
        methods:"*",
    }})

io.on('connection',hendelSocketConnetion)
io.on('newVote',()=>{hendelSocketnewVote()
    io.emit('newVote')
})



connectToMogo()
app.use(cors())

app.use(express.json())
app.use('/api/users', userController)
app.use('/api/admin', adminController)
app.use('/api/votes', votesController)
app.use('/api/candidates', candidatesController)

httpserver.listen(PORT, ()=>{
    console.log(`server run visit http://localhost:${PORT}`)
});
