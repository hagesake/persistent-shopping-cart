import type { Product } from './ProductList'

import { useShoppingCartDispatch } from '../../../redux_stores/shopping_cart/cart_hooks'
import { addToCart } from '../../../redux_stores/shopping_cart/cartSlice'

type Props = {
	product: Product
}

const ProductCard = ({ product }: Props) => {
	const shoppingCartProductsDispatch = useShoppingCartDispatch()

	return (
		<>
			<div className='flex max-w-sm space-x-2 rounded-lg border border-slate-600 p-2'>
				<div className='rounded-lg bg-slate-600 p-10'></div>
				<div className=''>
					<div>
						<h4>{product.name}</h4>
						<p className='text-xs'>{product.description}</p>
					</div>

					<div className='mt-2 flex flex-wrap items-center justify-between'>
						<div className='flex items-center gap-1 text-sm'>
							<p>Price:</p>
							<p>${product.price}</p>
						</div>

						<button
							onClick={() => {
								shoppingCartProductsDispatch(addToCart(product))
							}}
							className='rounded bg-slate-600 px-2 py-1 text-sm text-slate-100'>
							Add to cart
						</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default ProductCard
