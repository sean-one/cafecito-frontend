import Axios from 'axios';

const baseURL = process.env.REACT_APP_BACKEND_URL;

const axiosInstance = Axios.create({
    baseURL: baseURL,
});

export default axiosInstance;