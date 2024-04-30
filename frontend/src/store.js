import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  sidebarShow: true,
};

const usersReducer   = (state = initialState, action) => {
  switch (action.type) {
    case "set":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export default store;
