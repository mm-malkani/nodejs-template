import { addDeviceHelper, deleteDeviceHelper, getAllDevicesHelper, getSingleDeviceHelper, updateDeviceHelper } from "./deviceHelper.js"


//GET API to get all the devices

const getAllDevices = async (req, res) => {
    let url = 'https://api.restful-api.dev/objects'
    getAllDevicesHelper(url)
        .then(async response => {
            res.status(200).json(
            {
                    message: "Devices fetched successfully",
                    status: response.status,
                    data: response.data
                },
                res.statusCode
            )
        })
        .catch(error => {
            res.status(error?.status || 500).json(
                {
                    status: error.response.status,
                    message: error.message,
                },
                res.statusCode
            )
        }
    )
}

const getSingleDevice = async (req, res) => {
    let id = req.params.id
    let url = `https://api.restful-api.dev/objects/${id}`
    getSingleDeviceHelper(url)
        .then(async response => {
            res.status(200).json(
                {
                    message: "Device fetched successfully",
                    status: response.status,
                    data: response.data
                },
                res.statusCode
            )
        })
        .catch(error => {
            res.status(500).json(
                {
                    status: error.status,
                    data: error.message
                },
                
                res.statusCode
            )
        }
    )
}

const addDevice = async (req, res) => {
    const deviceData = req.body
    let url = 'https://api.restful-api.dev/objects'
    addDeviceHelper(url, deviceData)
        .then(async response => {
            res.status(200).json(
                {
                    message: "Device added successfully",
                    status: response.status,
                    data: response.data
                },
                res.statusCode
            )
        })
        .catch(error => {
            res.status(500).json(
                {
                    status: error.status,
                    data: error.message
                },
                
                res.statusCode
            )
        }
    )
    
}

const updateDevice = async (req, res) => {
    const deviceData = req.body
    let id = req.params.id
    let url = `https://api.restful-api.dev/objects/${id}`
    //const check = deviceDataSchema.safeParse(deviceData)
    updateDeviceHelper(url, deviceData)
        .then(async response => {
            res.status(200).json(
                {
                    message: "Device updated successfully",
                    status: response.status,
                    data: response.data
                },
                res.statusCode
            )
        })
        .catch(error => {
            res.status(500).json(
                {
                    status: error.status,
                    data: error.message
                },
                
                res.statusCode
            )
        }
    )
}

const deleteDevice = async (req, res) => {
    let id = req.params.id
    let url = `https://api.restful-api.dev/objects/${id}`
    deleteDeviceHelper(url)
        .then(async response => {
            res.status(200).json(
                {
                    message: "Device deleted successfully",
                    status: response.status,
                    data: response.data
                },
                res.statusCode
            )
        })
        .catch(error => {
            res.status(500).json(
                {
                    status: error.status,
                    data: error.message
                },
                
                res.statusCode
            )
        }
    )
}

export {
    getAllDevices,
    getSingleDevice,
    addDevice,
    updateDevice,
    deleteDevice
}