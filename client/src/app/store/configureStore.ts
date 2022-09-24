import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import basketSlice from "../../features/basket/basketSlice";
import catalogSlice from "../../features/catalog/catalogSlice";
import { counterSlice } from "../../features/contact/counterSlice";
import { homeSlice } from "../../features/home/homeSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    screen : homeSlice.reducer,
    basket: basketSlice,
    catalog: catalogSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>; 
export type AppDispatch = typeof store.dispatch; 

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
