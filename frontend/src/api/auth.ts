import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';

export const login = async (username, password) => {
    try {
        const response = await axios.post(`${API_URL}/auth/login`, { username, password });
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error.message;
    }
};

export const logout = async () => {
    try {
        await axios.post(`${API_URL}/auth/logout`);
    } catch (error) {
        throw error.response ? error.response.data : error.message;
    }
};

export const register = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/auth/register`, userData);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error.message;
    }
};