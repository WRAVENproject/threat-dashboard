import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/auth/actions';

export const useAuth = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            // Decode token to get user information
            const user = JSON.parse(atob(token.split('.')[1]));
            dispatch(setUser(user));
        }
    }, [dispatch]);

    const login = async (username, password) => {
        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            const data = await response.json();
            localStorage.setItem('token', data.token);
            dispatch(setUser(data.user));
        } else {
            throw new Error('Login failed');
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        dispatch(setUser(null));
    };

    return { login, logout };
};