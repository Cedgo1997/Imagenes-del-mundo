import axios from "axios";

const alegraApi = () =>
    axios.create({
        baseURL: process.env.VUE_APP_ALEGRA_URL,
        params: {
            limit: 4,
            status: 'active',
        },
        headers: {
            Authorization: process.env.VUE_APP_ALEGRA_API_TOKEN,
        },
    });

export default alegraApi;
