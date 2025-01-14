import { put, takeEvery } from "redux-saga/effects"
import { CREATE_CHECKOUT, CREATE_CHECKOUT_RED, DELETE_CHECKOUT, DELETE_CHECKOUT_RED, GET_CHECKOUT, GET_CHECKOUT_RED, UPDATE_CHECKOUT, UPDATE_CHECKOUT_RED } from "../Constants"

import { createRecords, deleteRecords, getRecords, updateRecords } from "./Services"

function* createSaga(action) {
    let response = yield createRecords("checkout", action.payload)
    yield put({ type: CREATE_CHECKOUT_RED, payload: response })
}
function* getSaga() {
    let response = yield getRecords("checkout")
    yield put({ type: GET_CHECKOUT_RED, payload: response })
}
function* updateSaga(action) {
    yield updateRecords("checkout", action.payload)
    yield put({ type: UPDATE_CHECKOUT_RED, payload: action.payload })
}

function* deleteSaga(action) {
    yield deleteRecords("checkout", action.payload)
    yield put({ type: DELETE_CHECKOUT_RED, payload: action.payload })
}

export default function* checkoutSaga() {
    yield takeEvery(CREATE_CHECKOUT, createSaga)
    yield takeEvery(GET_CHECKOUT, getSaga)
    yield takeEvery(UPDATE_CHECKOUT, updateSaga)
    yield takeEvery(DELETE_CHECKOUT, deleteSaga)
}

