import { configureStore} from "@reduxjs/toolkit";
import { menuItemReducer} from "./menuItemSlice";
import {authApi, menuItemApi, paymentApi, shoppingCartApi} from "../../Apis"
import {shoppingCartReducer} from "./shoppingCartSlice";
import {userAuthReducer} from "./userAuthSlice";



const store = configureStore({
    reducer:{
        menuItemStore: menuItemReducer,
        shoppingCartStore: shoppingCartReducer,
        userAuthStore : userAuthReducer,
        [menuItemApi.reducerPath] : menuItemApi.reducer,
        [shoppingCartApi.reducerPath] : shoppingCartApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        [paymentApi.reducerPath]: paymentApi.reducer,

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(menuItemApi.middleware)
            .concat(authApi.middleware)
            .concat(paymentApi.middleware)
            .concat(shoppingCartApi.middleware),
});


export type RootState = ReturnType<typeof store.getState>; // 타입스크립트에서만
export default store;