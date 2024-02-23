import alegraApi from "@/api/alegraApi";

const getAllSellers = async () => {
    const { data } = await alegraApi().get("/sellers");
    return data;
};

export default getAllSellers;