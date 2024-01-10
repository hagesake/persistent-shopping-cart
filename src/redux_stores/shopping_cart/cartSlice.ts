import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { InCartProduct } from '@/components/Products/InCartProductCard'
import { Product } from '@/components/Products/ProductList'

type ProductsInCartState = {
	products: InCartProduct[]
}

const initialState: ProductsInCartState = {
	products: []
}

export const shoppingCartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<Product>) => {
			const product = action.payload

			if (state.products.some(p => p.id === product.id)) {
				const index = state.products.findIndex(p => p.id === product.id)
				state.products[index].quantity += 1
			} else {
				state.products.push({
					...product,
					quantity: 1
				})
			}
		},

		removeFromCart: (state, action: PayloadAction<number>) => {
			state.products = state.products.filter(
				product => product.id !== action.payload
			)
		},

		increaseQuantity: (state, action: PayloadAction<number>) => {
			const index = state.products.findIndex(p => p.id === action.payload)
			state.products[index].quantity += 1
		},

		decreaseQuantity: (state, action: PayloadAction<number>) => {
			const index = state.products.findIndex(p => p.id === action.payload)
			if (state.products[index].quantity > 1) {
				state.products[index].quantity -= 1
			}
		},

		emptyCart: state => {
			state.products = []
		}
	}
})

export const {
	addToCart,
	removeFromCart,
	increaseQuantity,
	decreaseQuantity,
	emptyCart
} = shoppingCartSlice.actions
export default shoppingCartSlice.reducer
