import { all } from 'redux-saga/effects';
import { homeActionWatcher } from './home-saga';

export default function* rootSaga() {
    yield all([
        homeActionWatcher(),
    ]);
}
