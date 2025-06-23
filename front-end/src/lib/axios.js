//to make http://localhost5001/api/notes

import axios from "axios";

const api=axios.create({
    baseURL:"http://localhost:5001/api"
});

export default api;