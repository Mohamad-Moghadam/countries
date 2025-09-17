import axios from "axios"


const baseUrl = import.meta.env.VITE_COUNTRIES

const client = axios.create(
    {baseURL : baseUrl}
)

export {client}

