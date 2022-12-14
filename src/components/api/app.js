import axios from "axios";
import { baseUrl } from "../config/app";
import { notify } from "../helper/helpers";

export const upload = async (data, handleProgress) => {

    let url = `${baseUrl}/upload`;

    return await axios.post(url, data, {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Accept': 'application/json'
        },
        onUploadProgress: (progressEvent) => {
            const progress = ((progressEvent.loaded) / progressEvent.total) * 100;
            handleProgress(progress)
        }
    }).catch(err => {
        handleProgress(0)
        notify(err.message, "error")
    })


}


export const update = async data => {

    let url = `${baseUrl}/update`;
    return await axios.post(url, data, {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Accept': 'application/json'
        }
    }).catch(error => {

        if (error.response.status == 422) {
            notify("Bad request call", "error")
        }



    })

}