import ProductList from "../assets/components/Products/ProductList";
import InCartProductCard from "../assets/components/Products/InCartProductCard";

import { useShoppingCartSelector } from "../redux_stores/shopping_cart/cart_hooks";

const ShoppingCartView = () => {
  const productsInCart = useShoppingCartSelector(
    (state) => state.products.products,
  );

  return (
    <>
      <main className="flex flex-col px-4 pb-4">
        <h1>This is the shopping cart view</h1>

        <ProductList>
          {productsInCart.map((product, i) => {
            return (
              <InCartProductCard
                key={`${product.id} - ${i}`}
                product={product}
              />
            );
          })}
        </ProductList>
      </main>
    </>
  );
};

export default ShoppingCartView;
