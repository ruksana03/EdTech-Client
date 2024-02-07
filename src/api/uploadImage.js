import axios from "axios";

export const uploadImage = async (photo) => {
    try {
        const formData = new FormData();
        formData.append('image', photo);

        const response = await axios.post(
            `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`, // Use import.meta.env to access environment variables in Vite
            formData
        );

        console.log(response.data);

        return response.data;
    } catch (error) {
        console.error("Error uploading image:", error);
        throw error;
    }
};
