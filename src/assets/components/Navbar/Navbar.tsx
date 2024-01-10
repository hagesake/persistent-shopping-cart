import { Link } from 'react-router-dom'

import { useShoppingCartSelector } from '../../../redux_stores/shopping_cart/cart_hooks'

const NavBar = () => {
	const productsInCart = useShoppingCartSelector(
		state => state.products.products
	)

	return (
		<>
			<header className='sticky -top-0 flex items-center justify-between bg-slate-400 p-4'>
				<div>
					<Link to='/'>
						<img
							src='/logoipsum-211.svg'
							alt='LogoIpsum image'
							className='transition-all duration-300 hover:-skew-y-3 hover:skew-x-3'
						/>
					</Link>
				</div>

				<nav>
					<ul className='flex items-center gap-4'>
						<li className='flex items-center gap-1'>
							<Link
								to={'/cart'}
								className='font-bold opacity-65'>
								Cart
							</Link>
							<div
								className='rounded-full bg-slate-200
              px-2'>
								<p className='text-center text-slate-600'>
									{productsInCart.length}
								</p>
							</div>
						</li>
						<li>
							<Link
								to={'/about'}
								className='font-bold opacity-65'>
								About
							</Link>
						</li>
					</ul>
				</nav>
			</header>
		</>
	)
}

export default NavBar
