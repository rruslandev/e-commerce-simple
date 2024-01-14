import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
	FLUSH,
	PAUSE,
	PERSIST,
	PURGE,
	PersistConfig,
	REGISTER,
	REHYDRATE,
} from 'redux-persist';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import storage from 'redux-persist/lib/storage';
import { cartSlice } from './slice';

const persistConfig: PersistConfig<any> = {
	key: 'root',
	storage,
	whitelist: ['cart'],
};

const rootReducer = combineReducers({
	cart: cartSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export const persistor = persistStore(store);

export type TypeRootState = ReturnType<typeof rootReducer>;
