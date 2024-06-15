import { formatPrice } from "@/lib/utils";
import { Plus, X } from "lucide-react";
import React from "react";

const CartItems = () => {
  return (
    <div className="space-y-3 py-3">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center space-x-4">
          <div className="relative aspect-square h-16 w-16 min-w-fit overflow-hidden rounded">
            <img
              src="Banner1.jpeg"
              alt=""
              fill
              className="absolute object-cover"
            />
          </div>
          <div className="flex flex-col self-start">
            <span className="line-clamp-1 text-sm font-medium mb-1">
              Mlatiwangi Tas Bulat Pandan Bohemian
            </span>

            <span className="line-clamp-1 text-xs capitalize text-muted-foreground">
              Accessories
            </span>
            <div className="mt-3 text-xs text-muted-foreground flex gap-5 pr-2 justify-start">
              <button className="flex items-center gap-0.5">
                <X className="w-3 h-4" />
                Remove
              </button>
              <button className="flex items-center gap-0.5">
                <Plus className="w-3 h-4" />
                Add more
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-1 font-medium text-right">
          <span className="line-clamp-1 text-sm">{formatPrice(1000)}</span>
          <span className="line-clamp-1 text-sm">Quantity: 3</span>
          <span className="text-sm">Total: {formatPrice(3000)}</span>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
