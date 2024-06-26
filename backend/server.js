const express = require("express")
const dotenv = require("dotenv")
dotenv.config()
const cors = require("cors")


const app = express();

const userRoutes = require('./src/routes/user.routes')
const blogRoutes = require('./src/routes/blog.routes')
app.use(express.json());

app.use(cors({
    origin: "*",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  }));

app.use('/api/v1/user' , userRoutes)
app.use('/api/v1/blog' , blogRoutes)

const PORT = process.env.PORT || 8080


app.listen(PORT, ()=>{
    console.log(`server is listening on port ${PORT}`)
})

