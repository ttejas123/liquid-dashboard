import axios from 'axios';

// Create an Axios instance
const apiClient = axios.create({
    baseURL: "http://localhost:5173/",
});

// Add a request interceptor
apiClient.interceptors.request.use(
    function (config) {
        const token = window.localStorage.getItem("token");
        // Inject specific data into headers
        config.headers['authorization'] = `Bearer ${token}`;
        // Inject data into the request body or params if needed
        // if (config.method === 'post') {
        //     config.data = {
        //         ...config.data,
        //         customField: 'YourCustomData'
        //     };
        // }

        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default apiClient;