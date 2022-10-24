import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import cartReducer from "../pages/cart/cart.slice";
import catalogReducer from "../pages/catalog/catalog.slice";
import homepageReducer from "../pages/homepage/homepage.slice";
import productReducer from "../pages/product/product.slice";

export const store = configureStore({
  reducer: {
    homepage: homepageReducer,
    catalog: catalogReducer,
    cart: cartReducer,
    product: productReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
