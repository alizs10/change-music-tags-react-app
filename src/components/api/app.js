import axios from "axios";
import { baseUrl } from "../config/app";

export const upload = async data => {
    let url = `${baseUrl}/upload`;

    return await axios.post(url, data, {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Accept': 'application/json'
        }
    })
}