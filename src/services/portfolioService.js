export const getPortfolios = async () => {
    const response = await axios.get("/api/portfolios");
    return response.data;
};
