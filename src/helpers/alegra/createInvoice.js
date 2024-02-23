import alegraApi from "@/api/alegraApi";

const createInvoice = async (status, numberTemplate, items, seller, date, dueDate, client) => {
    const { data } = await alegraApi().post("/invoices", {
        status,
        numberTemplate,
        items,
        seller,
        date,
        dueDate,
        client
    });
    return data;
};

export default createInvoice;
