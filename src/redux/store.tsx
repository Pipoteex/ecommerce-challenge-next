import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import { productsApi } from "./services/amiiboApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
    reducer: {
        cart: counterReducer,
        [productsApi.reducerPath]: productsApi.reducer,
    },
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([productsApi.middleware]),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;