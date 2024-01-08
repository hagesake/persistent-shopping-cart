import type { Product } from "./ProductList";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
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

            <button className="rounded bg-slate-200 p-1">Add to cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
