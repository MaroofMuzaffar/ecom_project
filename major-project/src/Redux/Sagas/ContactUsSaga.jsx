import { put, takeEvery } from "redux-saga/effects"
import { CREATE_CONTACT_US, CREATE_CONTACT_US_RED, DELETE_CONTACT_US, DELETE_CONTACT_US_RED, GET_CONTACT_US, GET_CONTACT_US_RED, UPDATE_CONTACT_US, UPDATE_CONTACT_US_RED } from "../Constants"

import { createRecords, deleteRecords, getRecords, updateRecords } from "./Services"

function* createSaga(action) {
    let response = yield createRecords("contactus", action.payload)
    yield put({ type: CREATE_CONTACT_US_RED, payload: response })
}
function* getSaga() {
    let response = yield getRecords("contactus")
    yield put({ type: GET_CONTACT_US_RED, payload: response })
}
function* updateSaga(action) {
    yield updateRecords("contactus", action.payload)
    yield put({ type: UPDATE_CONTACT_US_RED, payload: action.payload })
}

function* deleteSaga(action) {
    yield deleteRecords("contactus", action.payload)
    yield put({ type: DELETE_CONTACT_US_RED, payload: action.payload })
}

export default function* contactusSaga() {
    yield takeEvery(CREATE_CONTACT_US, createSaga)
    yield takeEvery(GET_CONTACT_US, getSaga)
    yield takeEvery(UPDATE_CONTACT_US, updateSaga)
    yield takeEvery(DELETE_CONTACT_US, deleteSaga)
}

