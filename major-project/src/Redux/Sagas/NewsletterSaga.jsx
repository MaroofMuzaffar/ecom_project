import { put, takeEvery } from "redux-saga/effects"
import { CREATE_NEWSLETTER, CREATE_NEWSLETTER_RED, DELETE_NEWSLETTER, DELETE_NEWSLETTER_RED, GET_NEWSLETTER, GET_NEWSLETTER_RED, UPDATE_NEWSLETTER, UPDATE_NEWSLETTER_RED } from "../Constants"

import { createRecords, deleteRecords, getRecords, updateRecords } from "./Services"

function* createSaga(action) {
    let response = yield createRecords("newsletter", action.payload)
    yield put({ type: CREATE_NEWSLETTER_RED, payload: response })
}
function* getSaga() {
    let response = yield getRecords("newsletter")
    yield put({ type: GET_NEWSLETTER_RED, payload: response })
}
function* updateSaga(action) {
    yield updateRecords("newsletter", action.payload)
    yield put({ type: UPDATE_NEWSLETTER_RED, payload: action.payload })
}

function* deleteSaga(action) {
    yield deleteRecords("newsletter", action.payload)
    yield put({ type: DELETE_NEWSLETTER_RED, payload: action.payload })
}

export default function* newsletterSaga() {
    yield takeEvery(CREATE_NEWSLETTER, createSaga)
    yield takeEvery(GET_NEWSLETTER, getSaga)
    yield takeEvery(UPDATE_NEWSLETTER, updateSaga)
    yield takeEvery(DELETE_NEWSLETTER, deleteSaga)
}

