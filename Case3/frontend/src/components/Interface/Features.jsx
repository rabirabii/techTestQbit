import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { RiSecurePaymentLine, RiCheckLine } from "react-icons/ri";
import { MdSupportAgent } from "react-icons/md";
import { TbTruckReturn } from "react-icons/tb";

const Features = () => {
  const features = [
    {
      name: "Fast Delivery",

      icon: <CiDeliveryTruck />,
    },
    {
      name: "Secure Payment",

      icon: <RiSecurePaymentLine />,
    },
    {
      name: "Quality Products",

      icon: <RiCheckLine />,
    },
    {
      name: "24/7 Support",

      icon: <MdSupportAgent />,
    },
    {
      name: "Easy Returns",

      icon: <TbTruckReturn />,
    },
  ];
  return (
    <div>
      <div class="max-w-7xl mx-auto flex flex-wrap justify-around gap-8 py-12 px-4">
        <p class="w-full mb-4 -mt-4 text-center text-base font-semibold uppercase tracking-wider">
          Our Features
        </p>
        {features.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-center hover:text-gray-500 space-x-2"
          >
            <span className="text-3xl">{item.icon}</span>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
