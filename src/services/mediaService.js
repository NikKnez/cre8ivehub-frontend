export const uploadMedia = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    const response = await axios.post("/api/media/upload", formData);
    return response.data;
};
