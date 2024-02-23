import axios from "axios";

const apiKey = btoa(
    `${process.env.VUE_APP_ALEGRA_USERNAME}:${process.env.VUE_APP_ALEGRA_TOKEN}`
);

const alegraApi = (limit, status) =>
    axios.create({
        baseURL: process.env.VUE_APP_ALEGRA_URL,
        params: {
            limit,
            status,
        },
        headers: {
            Authorization: `Basic ${apiKey}`,
        },
    });

export default alegraApi;
