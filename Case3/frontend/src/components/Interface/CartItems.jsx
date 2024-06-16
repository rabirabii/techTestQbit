import { formatPrice } from "@/lib/utils";
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
} from "@/redux/slice/cartSlice";
import { Minus, Plus, X } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const CartItems = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const handleIncrease = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id));
  };
  return (
    <div className="space-y-3 py-3">
      {cartItems.map((item) => (
        <div key={item.id} className="flex items-start justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div className="relative aspect-square h-16 w-16 min-w-fit overflow-hidden rounded">
              <img
                src={item.image}
                alt={item.name}
                fill
                className="absolute object-cover"
              />
            </div>
            <div className="flex flex-col self-start">
              <span className="line-clamp-1 text-sm font-medium mb-1">
                {item.name}
              </span>

              <span className="line-clamp-1 text-xs capitalize text-muted-foreground">
                {item.category}
              </span>
              <div className="mt-3 text-xs text-muted-foreground flex gap-5 pr-2 justify-start">
                <button
                  className="flex items-center gap-0.5"
                  onClick={() => handleRemove(item.id)}
                >
                  <X className="w-3 h-4" />
                  Remove
                </button>
                <button
                  className="flex items-center gap-0.5"
                  onClick={() => handleIncrease(item.id)}
                >
                  <Plus className="w-3 h-4" />
                  Add more
                </button>
                <button
                  className="flex items-center gap-0.5"
                  onClick={() => handleDecrease(item.id)}
                >
                  <Minus className="w-3 h-4" />
                  Decreasae
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-1 font-medium text-right">
            <span className="line-clamp-1 text-sm">
              {formatPrice(item.price)}
            </span>
            <span className="line-clamp-1 text-sm">
              Quantity: {item.quantity}
            </span>
            <span className="text-sm">
              Total: {formatPrice(item.totalPrice)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItems;
