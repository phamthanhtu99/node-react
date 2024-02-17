import  express, { request }  from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoutes from "./routes/web";
require("dotenv").config();

const app = express();

configViewEngine(app);

initWebRoutes(app);

const PORT = process.env.PORT || 8080
app.listen(PORT,()=>{
    console.log("JWT backend is running on the server");
})