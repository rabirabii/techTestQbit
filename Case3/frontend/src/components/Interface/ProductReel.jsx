import React from "react";
import { Link } from "react-router-dom";
import ProductListing from "./ProductListing";
import { dummyItems } from "@/lib/dummy";

const ProductReel = ({ title, subtitle, href }) => {
  return (
    <section className="mx-12 py-12">
      <div className="md:flex md:items-center md:justify-between mb-4">
        <div className="max-w px-4 lg:max-w-4xl lg:px-0">
          {title ? (
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              {title}
            </h1>
          ) : null}
          {subtitle ? (
            <h1 className="mt-2 text-sm text-muted-foreground ">{subtitle}</h1>
          ) : null}
        </div>
        {href ? (
          <Link
            to={href}
            className="hidden text-sm font-medium text-gray-700 hover:text-gray-500 md:block"
          >
            Shop the collection <span aria-hidden="true">&rarr;</span>
          </Link>
        ) : null}
      </div>
      <div className="relative">
        <div className="mt-5 flex items-center w-full">
          <div className="w-full grid grid-cols-1 space-x-10 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-10 lg:gap-x-8">
            {dummyItems.product.map((product, index) => (
              <ProductListing
                key={product.id}
                product={product}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductReel;
