import { Throttle } from 'lodash';
import { Dispatch } from 'redux';
import { fetchThreatsApi, fetchThreatDetailApi } from '../../api/threats';
import { ThreatActionTypes, Threat } from './types';

export const fetchThreats = () => {
    return async (dispatch: Dispatch) => {
        dispatch({ type: ThreatActionTypes.FETCH_THREATS_REQUEST });
        try {
            const threats: Threat[] = await fetchThreatsApi();
            dispatch({
                type: ThreatActionTypes.FETCH_THREATS_SUCCESS,
                payload: threats,
            });
        } catch (error) {
            dispatch({
                type: ThreatActionTypes.FETCH_THREATS_FAILURE,
                payload: error.message,
            });
        }
    };
};

export const fetchThreatDetail = (id: string) => {
    return async (dispatch: Dispatch) => {
        dispatch({ type: ThreatActionTypes.FETCH_THREAT_DETAIL_REQUEST });
        try {
            const threatDetail = await fetchThreatDetailApi(id);
            dispatch({
                type: ThreatActionTypes.FETCH_THREAT_DETAIL_SUCCESS,
                payload: threatDetail,
            });
        } catch (error) {
            dispatch({
                type: ThreatActionTypes.FETCH_THREAT_DETAIL_FAILURE,
                payload: error.message,
            });
        }
    };
};