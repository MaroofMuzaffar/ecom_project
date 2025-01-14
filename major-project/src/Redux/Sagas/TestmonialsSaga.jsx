
import { put, takeEvery } from "redux-saga/effects"
import { CREATE_TESTMONIALS, CREATE_TESTMONIALS_RED, DELETE_TESTMONIALS, DELETE_TESTMONIALS_RED, GET_TESTMONIALS, GET_TESTMONIALS_RED, UPDATE_TESTMONIALS, UPDATE_TESTMONIALS_RED } from "../Constants"

import { createRecords, deleteRecords, getRecords, updateRecords } from "./Services"

function* createSaga(action) {
    let response = yield createRecords("testmonials", action.payload)
    yield put({ type: CREATE_TESTMONIALS_RED, payload: response })
}
function* getSaga() {
    let response = yield getRecords("testmonials")
    yield put({ type: GET_TESTMONIALS_RED, payload: response })
}
function* updateSaga(action) {
    yield updateRecords("testmonials", action.payload)
    yield put({ type: UPDATE_TESTMONIALS_RED, payload: action.payload })
}

function* deleteSaga(action) {
    yield deleteRecords("testmonials", action.payload)
    yield put({ type: DELETE_TESTMONIALS_RED, payload: action.payload })
}

export default function* TestmonialsSaga() {
    yield takeEvery(CREATE_TESTMONIALS, createSaga)
    yield takeEvery(GET_TESTMONIALS, getSaga)
    yield takeEvery(UPDATE_TESTMONIALS, updateSaga)
    yield takeEvery(DELETE_TESTMONIALS, deleteSaga)
}

