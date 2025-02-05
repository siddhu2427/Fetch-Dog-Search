import axios from "axios";

const API_BASE_URL = "https://frontend-take-home-service.fetch.com";

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true,
});

export const loginUser = async (name, email) => {
    try {
        await apiClient.post("/auth/login", { name, email });
        return true;
    } catch (error) {
        console.error("Login failed:", error);
        return false;
    }
};

export const logoutUser = async () => {
    try {
        await apiClient.post("/auth/logout");
    } catch (error) {
        console.error("Logout failed:", error);
    }
};

export const getBreeds = async () => {
    try {
        const response = await apiClient.get("/dogs/breeds");
        return response.data;
    } catch (error) {
        console.error("Error fetching breeds:", error);
        return [];
    }
};

export const searchDogs = async (filters = {}) => {
    try {
        const response = await apiClient.get("/dogs/search", { params: filters });
        return response.data;
    } catch (error) {
        console.error("Error searching dogs:", error);
        return { resultIds: [], total: 0 };
    }
};

export const getDogDetails = async (dogIds) => {
    try {
        const response = await apiClient.post("/dogs", dogIds);
        return response.data;
    } catch (error) {
        console.error("Error fetching dog details:", error);
        return [];
    }
};

export const getMatchedDog = async (favoriteDogIds) => {
    try {
        const response = await apiClient.post("/dogs/match", favoriteDogIds);
        return response.data.match;
    } catch (error) {
        console.error("Error getting match:", error);
        return null;
    }
};
