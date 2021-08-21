import { createSlice, SliceCaseReducers, Action } from "@reduxjs/toolkit";

interface User {
  email: string;
}

interface UserState {
  user: undefined | User;
}

interface LogInAction extends Action {
  payload: User;
}

interface UserReducers extends SliceCaseReducers<UserState> {
  logIn(state: UserState, action: LogInAction): void;
  logOut(state: UserState, action?: Action): void;
}

const userSlice = createSlice<UserState, UserReducers>({
  name: "user",
  initialState: { user: undefined },
  reducers: {
    logIn: (state, action) => {
      state.user = action.payload;
    },
    logOut: (state) => {
      state.user = undefined;
    },
  },
});

export const { logIn, logOut } = userSlice.actions;

export default userSlice.reducer;
