import { call, put, takeLatest } from "redux-saga/effects";
import {
  GET_ITEMS,
  GET_ITEM_DETAIL,
  getItemDetailSuccess,
  getItemFailed,
  getItemLoading,
  getItemsSuccess,
} from "./DataSlice";
import { getItemApi, getItemDetailApi } from "../utils/api";
import { PayloadAction } from "@reduxjs/toolkit";
import { DataItem, DataItemDetail } from "../models/models";

export function* getItemsSaga() {
  try {
    yield put(getItemLoading());
    const payload: DataItem[] = yield call(getItemApi);

    yield put(getItemsSuccess(payload));
  } catch (error) {
    yield put(
      getItemFailed({
        error: (error as Error).message,
        errFunc: { type: GET_ITEMS, payload: "" },
      })
    );
  }
}

export function* getItemDetailSaga(action: PayloadAction<string>) {
  try {
    yield put(getItemLoading());
    const id: string = action.payload;
    const payload: DataItemDetail = yield call(getItemDetailApi, id);

    yield put(getItemDetailSuccess(payload));
  } catch (error) {
    yield put(
      getItemFailed({ error: (error as Error).message, errFunc: action })
    );
  }
}

export function* sagas() {
  yield takeLatest(GET_ITEMS, getItemsSaga);
  yield takeLatest(GET_ITEM_DETAIL, getItemDetailSaga);
}
