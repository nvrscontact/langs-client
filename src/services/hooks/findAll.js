import axios from "axios";
import { useEffect, useState } from "react";

export default function findAll(table_name){

    const [arr,setArr] = useState([]);
    
    const API_URL = `http://192.168.1.58:8082/api/findAll`; 

    useEffect(() => {
        axios.post(API_URL + `?table=${table_name}`)
        .then(res => setArr(res.data));
    }, []);

    return arr;
}

