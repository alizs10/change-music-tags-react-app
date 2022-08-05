import axios from "axios";
import { baseUrl } from "../config/app";

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
    })
}


export const update = async data => {

    let url = `${baseUrl}/update`;
    return await axios.post(url, data, {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Accept': 'application/json'
        }
    })

}