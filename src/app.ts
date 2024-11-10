import express from 'express'
import 'dotenv'

const PORT = process.env.PORT || 3000
const app = express()

app.listen(PORT, ()=>{
    console.log(`server run visit http://localhost:${PORT}`);
    
})
