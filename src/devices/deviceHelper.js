import axios from 'axios';

const getAllDevicesHelper = async url => {
    return new Promise( async (resolve, reject) => {
        axios
            .get(url)
            .then(async response => {
                if(response.data.length > 0) {
                    let resp = {
                        status: response.status,
                        data: response.data
                    }
                    resolve(resp)
                } else {
                  let resp = {
                        status: 404,
                        message: "No devices found"
                  }
                    reject(resp)
                }
            })
            .catch(error => {
                let resp = {
                    status: error.response.status,
                    message: error.response.data.message
                }
                reject(resp)
            })
    })
}

const getSingleDeviceHelper = async url => {
    return new Promise(async(resolve, reject) => {
        axios
            .get(url)
            .then(async response => {
                if(response.data.length > 0) {
                    let resp = {
                        status: response.status,
                        data: response.data
                    }
                    resolve(resp)
                } else {
                  let resp = {
                        status: 404,
                        message: "No devices found"
                  }
                    reject(resp)
                }
            })
            .catch(error => {
                let resp = {
                    message: error.response.data.error,
                    status: error.response.status
                }
                reject(resp)
            })
    })
}

const addDeviceHelper = async (url, deviceData) => {
    return new Promise(async(resolve, reject) => {
        axios
            .post(url, deviceData)
            .then(async response => {
                let resp = {
                    status: response.status,
                    data: response.data
                }
                resolve(resp)
            })
            .catch(error => {
                let resp = {
                    status: error.response.status,
                    message: error.response.data.message
                }
                reject(resp)
            })
    })
}

const updateDeviceHelper = async (url, deviceData) => {
    return new Promise(async(resolve, reject) => {
        axios
            .put(url, deviceData)
            .then(async response => {
                let resp = {
                    status: response.status,
                    data: response.data
                }
                resolve(resp)
            })
            .catch(error => {
                let resp = {
                    status: error.response.status,
                    message: error.response.data.message
                }
                reject(resp)
            })
    })
}

const deleteDeviceHelper = async (url) => {
    return new Promise(async(resolve, reject) => {
        axios
            .delete(url)
            .then(async response => {
                let resp = {
                    status: response.status,
                    data: response.data
                }
                resolve(resp)
            })
            .catch(error => {
                let resp = {
                    status: error.response.status,
                    message: error.response.data.message
                }
                reject(resp)
            })
    })
}

export {
    getAllDevicesHelper,
    getSingleDeviceHelper,
    addDeviceHelper,
    updateDeviceHelper,
    deleteDeviceHelper
}