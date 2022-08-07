import axios from "axios";
import { baseUrl } from "../config/app";
import { notify } from "../helper/helpers";

export const upload = async (data, handleProgress) => {
    console.log(baseUrl);
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
        notify("Oops!", err.message, "danger")
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
            notify(error.code, "Bad request call", "danger")
        }



    })

}