import axios from "axios";

const API_URL = "http://192.168.1.58:8082/api/addWord";

/* This is a reutilisable code, we reduce 9 files into 3*/
export async function addRow(obj){

    await axios.post(API_URL, obj);

}