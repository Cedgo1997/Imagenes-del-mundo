import googleImagesApi from "@/api/googleImagesApi";

const requestImagesByText = async (query) => {
    const { data } = await googleImagesApi(query).get("/");
    return data;
};

const getImagesByText = async (query) => {
    const data = await requestImagesByText(query);
    return data.items.map(({ title, link }) => ({
        title,
        imageUrl: link,
    }));
};

export default getImagesByText;
