import React from "react";
import { SectionTitle } from "../section-title/section-title";
import { NewsCard } from "./components/news-card";
export const LatestNews = () => {
  return (
    <div className="flex flex-col w-full mb-20 items-end">
      <SectionTitle title="Latest News" />
      <div className="w-full flex justify-center">
        <div className="flex flex-wrap justify-center w-full px-3 gap-7">
          <NewsCard image="surfer.jpg" />
          <NewsCard image="man-looking-at-ocean.jpg" />
          <NewsCard image="woman-in-pool.jpg" />
        </div>
      </div>
    </div>
  );
};
