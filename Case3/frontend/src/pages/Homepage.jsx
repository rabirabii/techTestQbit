import Banner from "@/components/Interface/Banner";
import Features from "@/components/Interface/Features";
import ProductReel from "@/components/Interface/ProductReel";
import React from "react";

const Homepage = () => {
  return (
    <div>
      <Banner />
      <Features />
      <ProductReel
        title="Browse our Product"
        subtitle="These are our lastest product, Buy Before it runs out!"
        href="/products"
      />
    </div>
  );
};

export default Homepage;
