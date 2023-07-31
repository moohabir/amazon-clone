const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  user: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    Login: (state, action) => {
      state.user = action.payload;
    },
    Logout: (state, action) => {
      state.user = [];
    },
  },
});

export const { Login, Logout } = userSlice.actions;
export default userSlice.reducer;
