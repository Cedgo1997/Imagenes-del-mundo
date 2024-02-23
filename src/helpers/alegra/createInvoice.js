import alegraApi from "@/api/alegraApi";

const createInvoice = async (status, numberTemplate, items, seller, client) => {
    const { data } = await alegraApi().post("/invoices", {
        status,
        numberTemplate,
        items,
        seller,
        client
    });
    return data;
};

export default createInvoice;
