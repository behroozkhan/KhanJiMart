import React from "react";

const AboutHeroLeft = () => {
  return (
    <div className="flex flex-col justify-center w-full xl:w-[50%] lg:w-[50%] p-4 lg:p-0">
      <div className="space-y-6 lg:ml-14 w-[80%]">
      <h1 className="text-[1.900rem] text-[var(--mainTextBlack)] font-semibold sm:ml-0 xl:ml-20 lg:ml-20 md:ml-20">
          Our Story
        </h1>
        <p className="text-[1rem] text-[var(--mainTextBlack)] sm:ml-0 xl:ml-20 lg:ml-20 md:ml-20">
          Launched in 2015, Exclusive is South Asia’s premier online shopping
          marketplace with an active presence in Bangladesh. Supported by a wide
          range of tailored marketing, data and service solutions, Exclusive has
          10,500 sellers and 300 brands and serves 3 million customers across
          the region.
        </p>
        <p className="text-[1rem] text-[var(--mainTextBlack)] sm:ml-0 xl:ml-20 lg:ml-20 md:ml-20">
          Exclusive has more than 1 Million products to offer, growing at a very
          fast rate. Exclusive offers a diverse assortment in categories ranging
          from consumer.
        </p>
      </div>
    </div>
  );
};

export default AboutHeroLeft;
