import {configureStore} from "@reduxjs/toolkit";
import authReducer from "@/redux/state/authSlice.ts";
import { persistStore, persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage";



const persistConfig = {
	key: 'root',
	storage,
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
	reducer: {
		authState: persistedReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;