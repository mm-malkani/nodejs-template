import "dotenv/config"
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import cluster from 'cluster';
import { cpus } from 'os';

const app = express()

//Request logging
app.use(morgan("tiny"))

//Third Party Middlewares
app.use(cors())
app.use(bodyParser.json({limit: "1000000"}))
app.use(bodyParser.urlencoded({limit: "1000000", extended: true }))

//Express Middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//Routes

if(cluster.isPrimary) {
    let length = cpus().length
    if(process.env.API_ENVIORNMENT !== "production") length = 1
    //Forking the process
    for(let i = 0; i < length; i++) {
        cluster.fork()
    }
} else {
    //Routes

    //Inset Routes Here

    app.get('/', (req, res) => {
        res.send("Hello World")
    })

    //Import SQL Database

    //Start Server
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`)
    })

}