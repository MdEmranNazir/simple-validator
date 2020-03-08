const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
//Import Routers
const authRouter = require('./routers/auth')

dotenv.config()

//Connect to Db
mongoose.connect(
process.env.DB_CONNECT,
{ useUnifiedTopology: true },
() => console.log('connected to Db'))



//Middleware

app.use(express.json())

//Router Middleware
app.use('/api/user',authRouter)


app.listen(1234,() => console.log('Server Up and Running'))