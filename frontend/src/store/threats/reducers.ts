import { ThreatActionTypes, ThreatState } from './types';

const initialState: ThreatState = {
    threats: [],
    loading: false,
    error: null,
};

const threatsReducer = (state = initialState, action: ThreatActionTypes): ThreatState => {
    switch (action.type) {
        case 'FETCH_THREATS_REQUEST':
            return {
                ...state,
                loading: true,
                error: null,
            };
        case 'FETCH_THREATS_SUCCESS':
            return {
                ...state,
                loading: false,
                threats: action.payload,
            };
        case 'FETCH_THREATS_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default threatsReducer;