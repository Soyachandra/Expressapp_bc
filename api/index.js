/*import express from 'express'
import apiroutes from "./api_routes.js";
//import cors from "cors";
//app.use(cors({origin:"*"}))
const listen_port=3005
const app=express()
app.use("/",apiroutes);
app.listen(listen_port,() => {console.log('example app listening on port $ {listen_port}')})
*/
import express, { json, urlencoded } from "express";
import apiroutes from "./api_routes.js";
import cookieParser from "cookie-parser";
import logger from "morgan";

const listen_port = 8000;
const app = express();
app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/',apiroutes);

app.listen(listen_port,()=>{
    console.log(`Listening to ${listen_port}`);
})