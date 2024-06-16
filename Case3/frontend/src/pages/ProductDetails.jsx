import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { dummyItems } from "@/lib/dummy";
import { formatPrice } from "@/lib/utils";
import { addItem } from "@/redux/slice/cartSlice";
import { Check, Shield, ShoppingCart } from "lucide-react";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = dummyItems.product.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div>Product Not Found</div>;
  }

  const handleAddProduct = () => {
    dispatch(addItem(product));
  };
  const BREADCRUMBS = [
    {
      id: 1,
      name: "Home",
      href: "/",
    },
    {
      id: 2,
      name: "Products",
      href: "/products",
    },
    { id: 3, name: `${product.title}`, href: `/${product.id}` },
  ];

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-2 lg:py-6 mb-6 lg:mb-0">
            <Breadcrumb className="space-y-5 pb-5">
              <BreadcrumbList>
                {BREADCRUMBS.map((breadcrumb) => (
                  <BreadcrumbItem key={breadcrumb.id}>
                    <BreadcrumbSeparator />
                    <BreadcrumbLink>
                      <Link to={breadcrumb.href}>{breadcrumb.name}</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                ))}
              </BreadcrumbList>
            </Breadcrumb>
            <h2 className="text-sm title-font text-gray-800 tracking-widest font-bold">
              {product.title}{" "}
            </h2>
            <div className="flex mb-4">
              <p className="flex grow text-blue-500 border-b-2 border-blue-500 py-2 text-lg px-1">
                Description
              </p>
            </div>
            <p class="leading-relaxed mb-4">{product.description}</p>
            <div class="flex border-t border-gray-200 py-2">
              <span class="text-gray-500">Category</span>
              <span class="ml-auto text-gray-900">{product.category}</span>
            </div>
            <div class="flex border-t border-gray-200 py-2">
              <span class="text-gray-500">Size</span>
              <span class="ml-auto text-gray-900">Medium</span>
            </div>
            <div class="flex border-t border-b mb-6 border-gray-200 py-2">
              <span class="text-gray-500">Stock</span>
              <span class="ml-auto text-gray-900">{product.stock}</span>
            </div>
            <div class="flex">
              <span class="title-font font-medium text-2xl text-gray-900">
                {formatPrice(product.price)}
              </span>
              <Button
                class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                onClick={handleAddProduct}
              >
                Add to Cart <ShoppingCart className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
          <img
            src={product.image}
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
