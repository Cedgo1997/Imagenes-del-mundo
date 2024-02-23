import axios from "axios";

const apiKey = btoa(
    `${process.env.VUE_APP_ALEGRA_USERNAME}:${process.env.VUE_APP_ALEGRA_TOKEN}`
);

const alegraApi = () =>
    axios.create({
        baseURL: process.env.VUE_APP_ALEGRA_URL,
        params: {
            limit: 4,
            status: "active",
        },
        headers: {
            Authorization: `Basic ${apiKey}`,
        },
    });

export default alegraApi;
