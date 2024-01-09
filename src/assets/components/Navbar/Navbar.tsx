import { Link } from "react-router-dom";

import { useShoppingCartSelector } from "../../../redux_stores/shopping_cart/cart_hooks";

const NavBar = () => {
  const productsInCart = useShoppingCartSelector(
    (state) => state.products.products,
  );

  return (
    <>
      <header className="sticky -top-0 flex items-center justify-between bg-slate-400 p-4">
        <div>
          <Link to="/">Logo</Link>
        </div>

        <nav>
          <ul className="flex items-center gap-4">
            <li className="flex items-center gap-1">
              <Link to={"/cart"}>Cart</Link>
              <div
                className="rounded-full bg-slate-200
              px-2"
              >
                <p className="text-center text-slate-600">
                  {productsInCart.length}
                </p>
              </div>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
