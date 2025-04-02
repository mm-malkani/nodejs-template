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

export {
    getAllDevicesHelper
}