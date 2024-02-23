import pexelsImagesApi from "@/api/pexelsImagesApi";

const requestImagesByText = async (query, quantity) => {
    const {data} = await pexelsImagesApi(query, quantity).get("/search");
    return data.photos;
};

const getImagesByText = async (query, quantity) => {
    const photos = await requestImagesByText(query, quantity);
    return photos;
};

export default getImagesByText;
