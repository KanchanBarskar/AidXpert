import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IUserState {
  user: any;
  isAuthenticated: boolean;
  token: string | null;
}

const initialState: IUserState = {
  user: null,
  isAuthenticated: false,
  token: null,
};

export const userSlice = createSlice({
  initialState,
  name: "userSlice",
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
    setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
    setToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
    },
  },
});

export default userSlice.reducer;

export const { setUser, setIsAuthenticated, setToken } = userSlice.actions;