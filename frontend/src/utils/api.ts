import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8000';

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Utility function to handle GET requests
export const get = async (url: string) => {
    try {
        const response = await apiClient.get(url);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Utility function to handle POST requests
export const post = async (url: string, data: any) => {
    try {
        const response = await apiClient.post(url, data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Utility function to handle PUT requests
export const put = async (url: string, data: any) => {
    try {
        const response = await apiClient.put(url, data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Utility function to handle DELETE requests
export const del = async (url: string) => {
    try {
        const response = await apiClient.delete(url);
        return response.data;
    } catch (error) {
        throw error;
    }
};