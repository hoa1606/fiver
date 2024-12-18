import axios, { Axios } from "axios";

const fetcher = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        TokenCybersotf: import.meta.env.VITE_TOKEN_CYBERSOFT,
    },
});

export default fetcher;