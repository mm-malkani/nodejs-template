import  Router  from "express";
import { getAllDevices } from "./devcieController.js";

const deviceRouter = Router()

deviceRouter.get('/all', getAllDevices)

export default deviceRouter
