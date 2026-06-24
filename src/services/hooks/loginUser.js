import axios from "axios";

const API_URL = "http://192.168.1.58:8082/api/login";

export default async function loginUser(obj){
    
    const res = await axios.post(API_URL, obj); 

    return res.data;
}