import { getAllDevicesHelper } from "./deviceHelper.js"


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
                    message: "Error fetching device",
                    status: error.response.status,
                    data: error.response.data
                },
                res.statusCode
            )
        }
    )
}

export {
    getAllDevices,
    getSingleDevice
}