import { configureStore } from '@reduxjs/toolkit'

import {
	persistReducer,
	persistStore,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import shoppingCartProductsReducer from './cartSlice'

const persistConfig = {
	key: 'shop_cart',
	storage
}

const persistedCartReducer = persistReducer(
	persistConfig,
	shoppingCartProductsReducer
)

const store = configureStore({
	reducer: {
		products: persistedCartReducer
	},

	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
			}
		})
})

export default store
export const cartPersistor = persistStore(store)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
