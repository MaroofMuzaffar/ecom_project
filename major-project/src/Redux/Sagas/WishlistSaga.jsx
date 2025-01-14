import { put, takeEvery } from "redux-saga/effects"
import { CREATE_WISHLIST, CREATE_WISHLIST_RED, DELETE_WISHLIST, DELETE_WISHLIST_RED, GET_WISHLIST, GET_WISHLIST_RED } from "../Constants"

import { createRecords, deleteRecords, getRecords } from "./Services"

function* createSaga(action) {
    let response = yield createRecords("wishlist", action.payload)
    yield put({ type: CREATE_WISHLIST_RED, payload: response })
}
function* getSaga() {
    let response = yield getRecords("wishlist")
    yield put({ type: GET_WISHLIST_RED, payload: response })
}

function* deleteSaga(action) {
    yield deleteRecords("wishlist", action.payload)
    yield put({ type: DELETE_WISHLIST_RED, payload: action.payload })
}

export default function* wishlistSaga() {
    yield takeEvery(CREATE_WISHLIST, createSaga)
    yield takeEvery(GET_WISHLIST, getSaga)
    yield takeEvery(DELETE_WISHLIST, deleteSaga)
}

