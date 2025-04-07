export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

export interface LoginRequestAction {
    type: typeof LOGIN_REQUEST;
    payload: {
        username: string;
        password: string;
    };
}

export interface LoginSuccessAction {
    type: typeof LOGIN_SUCCESS;
    payload: {
        token: string;
        user: any; // Replace 'any' with a specific user type if available
    };
}

export interface LoginFailureAction {
    type: typeof LOGIN_FAILURE;
    payload: {
        error: string;
    };
}

export interface LogoutAction {
    type: typeof LOGOUT;
}

export type AuthActionTypes =
    | LoginRequestAction
    | LoginSuccessAction
    | LoginFailureAction
    | LogoutAction;