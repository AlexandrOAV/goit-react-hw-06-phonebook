import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';



const initialState = {
  list: []
};

const persistConfig = {
  key: 'list',
  storage
};

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.list.push(action.payload);
    },
    deleteContact: (state, action) => ({
      ...state,
      list: state.list.filter(contact => contact.id !== action.payload)
    })
  }
});

export const { addContact, deleteContact } = listSlice.actions;

export default persistReducer(persistConfig, listSlice.reducer);

export const selectList = state => state.list.list;