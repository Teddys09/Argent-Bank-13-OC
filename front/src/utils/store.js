import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = { value: { token: '', firstName: '', lastName: '' } };
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    token: (state, action) => {
      state.value.token = action.payload;
    },
    firstName: (state, action) => {
      state.value.firstName = action.payload;
    },
    lastName: (state, action) => {
      state.value.lastName = action.payload;
    },
    logout: (state) => {
      state.value = initialState.value;
    },
  },
});

export const { token, firstName, lastName, logout } = userSlice.actions;

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});
