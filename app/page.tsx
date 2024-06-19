import { Hero } from "./components/hero/hero";
import { GridCategories } from "./components/grid-categories/grid-categories";
import { NewProduct } from "./components/new-product/new-product";
export default function Home() {
  return (
    <>
      <Hero />
      <GridCategories />
      <NewProduct />
    </>
  );
}
