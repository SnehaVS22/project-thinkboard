//to make http://localhost5001/api/notes

import axios from "axios";
const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5001/api" :"/api"
const api=axios.create({
    baseURL:BASE_URL //in production we don't know specific local host therefore we make this dynamic 
});

export default api;