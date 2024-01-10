import ProductList from '../assets/components/Products/ProductList'
import InCartProductCard from '../assets/components/Products/InCartProductCard'

import {
	useShoppingCartSelector,
	useShoppingCartDispatch
} from '../redux_stores/shopping_cart/cart_hooks'
import { emptyCart } from '../redux_stores/shopping_cart/cartSlice'

const ShoppingCartView = () => {
	const productsInCart = useShoppingCartSelector(
		state => state.products.products
	)
	const shoppingCartProductsDispatch = useShoppingCartDispatch()

	const totalPrice = productsInCart.reduce(
		(accumulator, product) => accumulator + product.price * product.quantity,
		0
	)

	return (
		<>
			<main className='flex flex-col gap-2 p-4'>
				<div className='flex flex-wrap items-center justify-between gap-2 sm:gap-4'>
					<h1>This is the shopping cart view</h1>
					<p className='rounded-lg bg-slate-400 px-2 py-1 font-bold text-black text-opacity-65'>
						Total: {totalPrice}
					</p>
				</div>

				<ProductList>
					{productsInCart.map((product, i) => {
						return (
							<InCartProductCard
								key={`${product.id} - ${i}`}
								product={product}
							/>
						)
					})}
				</ProductList>

				<div className='flex justify-end'>
					{productsInCart.length > 0 && (
						<button
							onClick={() => {
								shoppingCartProductsDispatch(emptyCart())
							}}
							className='rounded bg-slate-600 px-2 py-1 text-sm text-slate-100'>
							Empty Cart
						</button>
					)}
				</div>
			</main>
		</>
	)
}

export default ShoppingCartView
