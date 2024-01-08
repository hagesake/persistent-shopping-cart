import ProductList from "../assets/components/Products/ProductList";

const HomeView = () => {
  return (
    <>
      <main className="flex flex-col px-4 pb-4">
        <h1>This is the home view</h1>

        <ProductList />
      </main>
    </>
  );
};

export default HomeView;
