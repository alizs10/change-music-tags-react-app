import axios from "axios";
import { Store } from "react-notifications-component";
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
    }).catch(err => {
        Store.addNotification({
            title: "Oops!",
            message: err.message,
            type: "danger",
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
                duration: 5000,
                onScreen: true
            }
        });


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