//types

import {
  configureStore,
  createAction,
  createReducer,
  PayloadAction,
} from '@reduxjs/toolkit';
import {Item} from './Item.model';

// types

export const SELECT_ITEM = 'SELECT_ITEM';
export const LOAD_ITEMS = 'LOAD_ITEMS';

// action creators

export const loadItems = createAction<Item[]>(LOAD_ITEMS);
export const selectItem = createAction<Item>(SELECT_ITEM);

export type RootState = {
  selectedItem?: Item;
  items: Item[];
};

const initialAppState: RootState = {
  selectedItem: undefined,
  items: [],
};

const reducer = createReducer(initialAppState, {
  SELECT_ITEM(state, action: PayloadAction<Item>) {
    state.selectedItem = action.payload;
  },
  LOAD_ITEMS(state, action: PayloadAction<Item[]>) {
    state.items = action.payload;
  },
});

export const store = configureStore({
  reducer,
});
