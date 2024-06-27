import { Hero } from "./components/hero/hero";
import { GridCategories } from "./components/grid-categories/grid-categories";
import { NewProduct } from "./components/new-product/new-product";
import { CollectionBanner } from "./components/collection-banner/collection-banner";
import { BenefitsBanner } from "./components/benefits-banner/benefits-banner";
import { LatestNews } from "./components/latest-news/latest-news";
import { Newsletter } from "./components/newsletter/newsletter";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <GridCategories />
      <NewProduct />
      <CollectionBanner />
      <BenefitsBanner />
      <LatestNews />
      <Newsletter />
    </div>
  );
}
