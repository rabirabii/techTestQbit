import React, { useEffect, useState } from "react";
import { Skeleton } from "../ui/skeleton";
import { Link } from "react-router-dom";
import { formatPrice } from "@/lib/utils";
import { ShoppingCart } from "lucide-react";
import { useDispatch } from "react-redux";
import { addItem } from "@/redux/slice/cartSlice";

const ProductListing = ({ product, index }) => {
  const [visible, setIsVisible] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 75);

    return () => clearTimeout(timer);
  }, [index]);

  if (!product || !visible) return <ProductPlaceHolder />;

  const handleAddProduct = () => {
    console.log("Adding product to cart:", product);
    dispatch(addItem(product));
  };

  return (
    <div className="h-full w-full cursor-pointer group/main">
      <div className={visible ? "visible animate-in fade-in-5" : ""}>
        <div className="flex flex-col w-full">
          <div className="relative flex h-72 overflow-hidden rounded-lg shadow-lg">
            <img src={product.image} className="object-cover w-full h-full" />
            <button
              className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
              onClick={handleAddProduct}
            >
              <ShoppingCart className="w-5 h-5 text-gray-700" />
            </button>
          </div>
          <Link to={`/product/${product.id}`}>
            <h3 className="mt-4 font-medium text-sm text-gray-700">
              {product.title}
            </h3>
            <p className="mt-1 text-sm text-gray-600">{product.category}</p>
            <p className="mt-1 text-sm text-gray-600">
              {formatPrice(product.price)}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

const ProductPlaceHolder = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="relative bg-gray-300 aspect-square w-full overflow-hidden rounded-xl">
        <Skeleton className="h-full w-full" />
      </div>
      <Skeleton className="mt-4 w-2/3 h-4 rounded-lg" />
      <Skeleton className="mt-2 w-16 h-4 rounded-lg" />
      <Skeleton className="mt-3 w-12 h-4 rounded-lg" />
    </div>
  );
};

export default ProductListing;
