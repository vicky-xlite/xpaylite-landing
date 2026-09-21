import axios from "axios";

const API_BASE_URL = "https://merchant.xpaylite.com/api"; // change this

export const submitComplaint = async (data) => {
    try {
        const response = await axios.post(
            `${API_BASE_URL}/complaintweb/store`,
            data,
            {
                headers: {
                    "Content-Type": "application/json",
                    // Authorization: "Bearer YOUR_API_TOKEN", // if required
                },
            }
        );

        return response.data;

    } catch (error) {
        throw error.response?.data || { message: "Something went wrong" };
    }
};