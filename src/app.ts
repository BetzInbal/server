import express from 'express'
import 'dotenv'

import userController from './controllers/users'
import adminController from './controllers/admin'
import votesController from './controllers/votes'
import candidatesController from './controllers/candidates'

const PORT = process.env.PORT || 3000
const app = express()

app.use(express.json())
app.use('api/users', userController)
app.use('api/admin', adminController)
app.use('api/votes', votesController)
app.use('api/candidates', candidatesController)

app.listen(PORT, ()=>{
    console.log(`server run visit http://localhost:${PORT}`);
    
})
