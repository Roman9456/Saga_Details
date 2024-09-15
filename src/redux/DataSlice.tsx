import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DataItem, DataItemDetail } from "../models/models";

interface InitialState {
  items: DataItem[];
  detail: DataItemDetail | null;
  errorFunc: PayloadAction<string> | null;
  error: string | null;
  loading: boolean;
}

const initialState: InitialState = {
  items: [],
  detail: null,
  errorFunc: null,
  error: "",
  loading: false,
};

const DataSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    getItemsSuccess(state, action: PayloadAction<DataItem[]>) {
      state.loading = false;
      state.error = null;
      state.items = action.payload;
      state.errorFunc = null;
    },
    getItemFailed(
      state,
      action: PayloadAction<{
        error: string;
        errFunc: PayloadAction<string>;
      }>
    ) {
      state.loading = false;
      state.error = action.payload.error;
      state.errorFunc = action.payload.errFunc;
      state.items = [];
    },
    getItemLoading(state) {
      state.loading = true;
      state.error = null;
      state.errorFunc = null;
      state.items = [];
      state.detail = null;
    },

    getItemDetailSuccess(state, action: PayloadAction<DataItemDetail>) {
      state.loading = false;
      state.error = null;
      state.detail = action.payload;
    },
  },
});

export const GET_ITEMS = "items/getItems";
export const getItems = createAction(GET_ITEMS);

export const GET_ITEM_DETAIL = "items/getItemDetail";
export const getItemDetail = createAction<string>(GET_ITEM_DETAIL);

export const {
  getItemsSuccess,
  getItemFailed,
  getItemLoading,
  getItemDetailSuccess,
} = DataSlice.actions;

export default DataSlice.reducer;
