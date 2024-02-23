import alegraApi from "@/api/alegraApi";

const getAllSellers = async () => {
    const { data } = await alegraApi(4, "active").get("/sellers");
    return data;
};

export default getAllSellers;
