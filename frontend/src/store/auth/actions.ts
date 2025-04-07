import { AuthActionTypes, AuthAction } from './types';

export const login = (username: string, password: string): AuthAction => {
    return {
        type: AuthActionTypes.LOGIN,
        payload: { username, password },
    };
};

export const logout = (): AuthAction => {
    return {
        type: AuthActionTypes.LOGOUT,
    };
};

export const setAuthError = (error: string): AuthAction => {
    return {
        type: AuthActionTypes.SET_AUTH_ERROR,
        payload: error,
    };
};