import axios from "axios";

const googleImagesApi = (query) =>
    axios.create({
        baseURL: "https://www.googleapis.com/customsearch/v1",
        params: {
            key: process.env.VUE_APP_GOOGLE_API_KEY,
            cx: process.env.VUE_APP_GOOGLE_CX,
            searchType: "image",
            q: query,
        },
    });

export default googleImagesApi;
