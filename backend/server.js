const express = require("express")
const dotenv = require("dotenv").config()
const cors = require("cors")
const {userRouter} = require('./src/routes/user.routes')

const app = express();

app.use(cors);
app.use(express.json());

app.use('/api/v1' , userRouter)

const PORT = process.env.PORT || 8080

app.listen(PORT, ()=>{
    console.log(`server is listening on port ${PORT}`)
})