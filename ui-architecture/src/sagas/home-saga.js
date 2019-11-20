import { put, takeLatest } from 'redux-saga/effects';
import { ActionTypes } from '../redux/types';
import Axios from '../adapters/axios';

function* serviceCall() {
    const json = yield fetch('https://api.coinmarketcap.com/v2/listings/')
    .then(response => response.json());
    console.log(json);
    yield put({ type: "DATA_RECEIVED", json: json.attention   || [{ error: json.message }] });

    // const axiosRes = yield Axios.instance.get(`${Axios.endpoints.articles}`);
    // console.log(axiosRes);
    // const json = axiosRes.data;
    // yield put({ type: ActionTypes.DATA_RECEIVED, json: json.articles || [{ error: json.message }] });
}

export function* homeActionWatcher() {
    yield takeLatest(ActionTypes.TEST, serviceCall)
}

