import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { ShoppingCart } from "lucide-react";
import React from "react";

import CartItems from "./CartItems";
import { ScrollArea } from "@/components/ui/scroll-area";
import { formatPrice } from "@/lib/utils";
import { useSelector } from "react-redux";
import StripeWrapper from "./stripeWrapper";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const fee = 10000;
  const itemCount = cart.items.length;

  // Ensure the total amount is above the minimum requirement
  const minimumAmountIDR = 7500;
  const totalAmount =
    cart.totalAmount + fee < minimumAmountIDR
      ? minimumAmountIDR
      : cart.totalAmount + fee;

  return (
    <Sheet>
      <SheetTrigger className="group -m-2 flex items-center p2">
        <ShoppingCart
          aria-hidden="true"
          className="h-6 w-6 flex-shrink text-gray-500 group-hover:text-gray-700"
        />
        <span className="ml-2 text-sm font-medium text-gray-900">
          {itemCount}
        </span>
      </SheetTrigger>
      <SheetContent
        className="flex w-full flex-col pr-0 sm:max-w-lg"
        side="left"
      >
        <SheetHeader className="space-y-2.5 pr-6">
          <SheetTitle>Cart {itemCount}</SheetTitle>
        </SheetHeader>
        {itemCount > 0 ? (
          <>
            <div className="flex w-full flex-col pr-6">
              <ScrollArea>
                <CartItems />
              </ScrollArea>
            </div>
            <div className="space-y-4 pr-6">
              <Separator />
              <div className="space-y-1.5 text-sm">
                <div className="flex">
                  <span className="flex-1">Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex">
                  <span className="flex-1">Transaction Fee</span>
                  <span>{formatPrice(fee)}</span>
                </div>
                <div className="flex">
                  <span className="flex-1">Total</span>
                  <span>{formatPrice(totalAmount)}</span>
                </div>
              </div>
              <SheetFooter>
                <div className="w-full">
                  <StripeWrapper />
                </div>
              </SheetFooter>
            </div>
          </>
        ) : (
          <div className="flex h-full flex-col items-center justify-center space-y-8">
            <div
              aria-hidden="true"
              className="relative mb-4 h-48 w-48 text-muted-foreground"
            >
              <img src="/sad-bunny.png" fill alt="empty shopping cart" />
            </div>
            <div className="text-xl font-semibold">Your cart is empty</div>
            <SheetTrigger asChild>
              <a
                href="/products"
                className={buttonVariants({
                  variant: "link",
                  size: "sm",
                  className: "text-sm text-muted-foreground",
                })}
              >
                Add items to your cart to checkout
              </a>
            </SheetTrigger>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
