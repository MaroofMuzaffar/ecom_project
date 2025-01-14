import { put, takeEvery } from "redux-saga/effects"
import { CREATE_CART, CREATE_CART_RED, DELETE_CART, DELETE_CART_RED, GET_CART, GET_CART_RED, UPDATE_CART, UPDATE_CART_RED } from "../Constants"

import { createRecords, deleteRecords, getRecords, updateRecords } from "./Services"

function* createSaga(action) {
    let response = yield createRecords("cart", action.payload)
    yield put({ type: CREATE_CART_RED, payload: response })
}
function* getSaga() {
    let response = yield getRecords("cart")
    yield put({ type: GET_CART_RED, payload: response })
}
function* updateSaga(action) {
    yield updateRecords("cart", action.payload)
    yield put({ type: UPDATE_CART_RED, payload: action.payload })
}

function* deleteSaga(action) {
    yield deleteRecords("cart", action.payload)
    yield put({ type: DELETE_CART_RED, payload: action.payload })
}

export default function* cartSaga() {
    yield takeEvery(CREATE_CART, createSaga)
    yield takeEvery(GET_CART, getSaga)
    yield takeEvery(UPDATE_CART, updateSaga)
    yield takeEvery(DELETE_CART, deleteSaga)
}

