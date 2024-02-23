import axios from "axios";

const pexelsImagesApi = (query, per_page) =>
    axios.create({
        baseURL: process.env.VUE_APP_PEXELS_URL,
        params: {
            query,
            orientation: "square",
            per_page,
        },
        headers: {
            Authorization: process.env.VUE_APP_PEXELS_API_KEY,
        },
    });

export default pexelsImagesApi;
