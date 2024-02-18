import  express, { request }  from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoutes from "./routes/web";
import bodyParser from 'body-parser';

require("dotenv").config();

const app = express();

//config body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

configViewEngine(app);

initWebRoutes(app);



const PORT = process.env.PORT || 8080
app.listen(PORT,()=>{
    console.log("JWT backend is running on the server");
})