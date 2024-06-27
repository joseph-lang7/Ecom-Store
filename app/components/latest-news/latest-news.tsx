import React from "react";
import { SectionTitle } from "../section-title/section-title";
import { NewsCard } from "./components/news-card";
export const LatestNews = () => {
  return (
    <div className="flex flex-col items-center w-full mb-10">
      <SectionTitle title="Latest News" />
      <div className="w-full flex justify-center my-7">
        <div className="flex flex-wrap justify-center w-full px-5 gap-7">
          <NewsCard image="surfer.jpg" />
          <NewsCard image="man-looking-at-ocean.jpg" />
          <NewsCard image="woman-in-pool.jpg" />
        </div>
      </div>
    </div>
  );
};
