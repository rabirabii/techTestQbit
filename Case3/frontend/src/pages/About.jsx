import React from "react";

const About = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              About Us
              <br className="hidden md:block" />
              <span className="relative inline-block mt-2">
                <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-blue-50" />
                <span className="relative inline-block text-gray-900">
                  Mlatiwangi
                </span>
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Mlatiwangi is dedicated to crafting beautiful, eco-friendly bags
              from natural fibers. Our mission is to create sustainable and
              stylish products that not only look good but also contribute
              positively to the environment. We believe in the power of nature
              and the importance of preserving it for future generations.
            </p>
          </div>
          <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
            <div className="bg-white border-l-4 shadow-sm border-blue-300">
              <div className="h-full p-5 border border-l-0 rounded-r">
                <h6 className="mb-2 font-semibold leading-5">Our Mission</h6>
                <p className="text-sm text-gray-900">
                  To provide high-quality, eco-friendly bags that combine style
                  with sustainability.
                </p>
              </div>
            </div>
            <div className="bg-white border-l-4 shadow-sm border-blue-300">
              <div className="h-full p-5 border border-l-0 rounded-r">
                <h6 className="mb-2 font-semibold leading-5">Our Vision</h6>
                <p className="text-sm text-gray-900">
                  To lead the market in natural fiber products and inspire a
                  global movement towards sustainable fashion.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            src="/about.jpg"
            alt="About Mlatiwangi"
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
