import { useShoppingCartDispatch } from "../../../redux_stores/shopping_cart/cart_hooks";
import { removeFromCart } from "../../../redux_stores/shopping_cart/cartSlice";

export type InCartProduct = {
  id: number;
  name: string;
  price: number;
  description: string;
  quantitty: number;
};

type Props = {
  product: InCartProduct;
};

const InCartProductCard = ({ product }: Props) => {
  const shoppingCartProductsDispatch = useShoppingCartDispatch();

  return (
    <>
      <div className="flex max-w-sm space-x-2 rounded-lg border border-slate-600 p-2">
        <div className="rounded-lg bg-slate-600 p-10"></div>
        <div className="">
          <div>
            <h4>{product.name}</h4>
            <p className="text-xs">{product.description}</p>
          </div>

          <div className="flex flex-wrap items-center justify-between">
            <div className="flex items-center gap-2">
              <p>Price</p>
              <p>{product.price}</p>
            </div>

            <div className="flex items-center gap-2">
              <button>-</button>
              <p>{product.quantitty}</p>
              <button>+</button>
            </div>
          </div>

          <button
            onClick={() => {
              shoppingCartProductsDispatch(removeFromCart(product.id));
            }}
            className="rounded bg-slate-200 p-1"
          >
            Remove
          </button>
        </div>
      </div>
    </>
  );
};

export default InCartProductCard;
