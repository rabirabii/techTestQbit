import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Button, buttonVariants } from "../ui/button";
import { Link } from "react-router-dom";

const Banner = () => {
  const heroItems = [
    {
      title: "Mlatiwangi Tas Bulat Pandan Bohemian",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus animi, temporibus eligendi amet earum esse magni, possimus delectus optio quo magnam nobis ipsa porro tempora dolorum expedita illo iusto sequi.",
      image: "Banner1.jpeg",
    },
    {
      title: "Stylish Handcrafted Bags",
      description:
        "Explore our unique handcrafted bags made from the finest materials. Perfect for any occasion.",
      image: "Banner2.jpeg",
    },
    {
      title: "Eco-Friendly Fashion",
      description:
        "Join the movement with our eco-friendly fashion bags, designed with sustainability in mind.",
      image: "Banner3.jpeg",
    },
  ];
  return (
    <section>
      <div className="relative py-12 bg-white overflow-hidden sm:py-16 lg:py-20">
        <div className="relative px-4 mx-auto sm:px-6 lg-px-8 max-w-7xl">
          <div className=" max-w-6xl mx-auto">
            <Carousel>
              <CarouselContent>
                {heroItems.map((item, index) => (
                  <CarouselItem key={index}>
                    <div className="grid items-center gird-cols-1 gap-y-12 lg:grid-cols-2 gap-x-16 xl:gap-x-24">
                      <div className="max-w-lg mx-auto text-center lg:max-w-none lg:mx-0 lg:order-2 lg:text-left">
                        <h1 className="mt-5 text-3xl font-bold text-gray-900 lg:mt-8 sm:text-4xl xl:text-5xl xl:leading-tight">
                          {item.title}
                        </h1>
                        <br />
                        <p className="text-base font-medium text-gray-900">
                          {item.description}
                        </p>
                        <div className="mt-10 lg:mt-14">
                          <Button variant="ghost">
                            We've got the perfect bag for you! &rarr;
                          </Button>
                          <Link className={buttonVariants()}>
                            Get the Bag Now!
                          </Link>
                        </div>
                      </div>

                      <div className="relative lg:order-1">
                        <div className="relative">
                          <img
                            className="w-full max-w-xs mx-auto xl:max-w-sm"
                            src={item.image}
                            alt={item.title}
                          />
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
