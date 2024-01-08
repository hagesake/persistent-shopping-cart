import ProductCard from "./ProductCard";

export type Product = {
  name: string;
  price: number;
  description: string;
};

const products: Product[] = [
  {
    name: "Lockpick",
    price: 1,
    description: "Lorem ipsum dolor sit amet. This is the product description",
  },
  {
    name: "Blade of Woe",
    price: 10,
    description: "Lorem ipsum dolor sit amet. This is the product description",
  },
  {
    name: "Ancient Shroudded Armor",
    price: 20,
    description: "Lorem ipsum dolor sit amet. This is the product description",
  },
  {
    name: "Ancient Shroudded Gloves",
    price: 30,
    description: "Lorem ipsum dolor sit amet. This is the product description",
  },
  {
    name: "Ancient Shroudded Hood",
    price: 40,
    description: "Lorem ipsum dolor sit amet. This is the product description",
  },
  {
    name: "Ancient Shroudded Boots",
    price: 50,
    description: "Lorem ipsum dolor sit amet. This is the product description",
  },
];

const ProductList = () => {
  return (
    <>
      <section className="grid items-center justify-center gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product, i) => {
          return (
            <ProductCard key={`${product.name} - ${i}`} product={product} />
          );
        })}
      </section>
    </>
  );
};

export default ProductList;
