import axios from 'axios';
import { Threat } from '../types/threats';

const API_URL = '/api/threats';

export const getThreats = async (): Promise<Threat[]> => {
    const response = await axios.get<Threat[]>(API_URL);
    return response.data;
};

export const getThreatById = async (id: string): Promise<Threat> => {
    const response = await axios.get<Threat>(`${API_URL}/${id}`);
    return response.data;
};

export const createThreat = async (threat: Threat): Promise<Threat> => {
    const response = await axios.post<Threat>(API_URL, threat);
    return response.data;
};

export const updateThreat = async (id: string, threat: Threat): Promise<Threat> => {
    const response = await axios.put<Threat>(`${API_URL}/${id}`, threat);
    return response.data;
};

export const deleteThreat = async (id: string): Promise<void> => {
    await axios.delete(`${API_URL}/${id}`);
};