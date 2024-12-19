import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ContenUser, CurrentUser } from '../../interfaces/user.inteface';

interface UserState {
  currentUser: ContenUser<CurrentUser> | null;
}

const initialState: UserState = {
  currentUser: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser: (state, { payload }: PayloadAction<ContenUser<CurrentUser>>) => {
      state.currentUser = payload;
    },
    logout: (state) => {
      state.currentUser = null;
    },
  },
});

export const { setCurrentUser, logout } = userSlice.actions;
export default userSlice;
