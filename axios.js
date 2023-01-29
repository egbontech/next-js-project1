import axios from "axios";

const base_url = process.env.NEXT_PUBLIC_BASE_URL;
//base url to make request to api

const instance = axios.create({
    baseURL: `${base_url}/api/`,
   
});

export default instance;