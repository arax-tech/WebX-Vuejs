import axios from "axios";
const axiosClient = axios.create({
    // baseURL: 'https://backend.whitexdigital.com/api',
    baseURL: 'http://127.0.0.1:8000/api',
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
    },
});

export default axiosClient;