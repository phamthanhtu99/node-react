import express from "express";
import homeController  from "../controller/homeController";

const router = express.Router();

/**
 * express app
 */
const initWebRoutes =(app)=>{
    router.get("/",homeController.handlerHelloWord)
    router.get("/views",homeController.handlerViewHelloWord)
    router.get("/user",homeController.handlerViewUser)
    router.post("/users/create-user",homeController.handlerCreateNewUser)
    return app.use("/",router);
}

export default initWebRoutes;