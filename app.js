
const  express  = require ("express");
const dotenv = require ('dotenv')
dotenv.config()
const connectDb = require ('./db')
const app = express()

//port
const port = 3000;
connectDb()
//route
app.get('/api', (req,res,next)=>{
    console.log('Hello World')
})

//listening
app.listen(port,()=>{
    console.log(`Listening on ${port}`)
})