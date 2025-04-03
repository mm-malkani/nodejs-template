import  Router  from "express";
import { addDevice, deleteDevice, getAllDevices, getSingleDevice, updateDevice } from "./devcieController.js";

const deviceRouter = Router()

deviceRouter.get('/all', getAllDevices)
deviceRouter.get('/:id', getSingleDevice)
deviceRouter.post('/add', addDevice)
deviceRouter.put('/update/:id', updateDevice)
deviceRouter.delete('/delete/:id', deleteDevice)

export default deviceRouter
