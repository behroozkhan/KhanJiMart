  import React from "react";
  import { Link } from "react-router-dom";
  import AboutHeroLeft from "./AboutHeroLeft";
  import AboutHeroRightImg from "./AboutHeroRightImg";
import SaleBox from "./SaleBox";
import TestemonilasCraousels from "./TestemonilasCraousels";

  const AboutCont = () => {
    return (
      <div className="mx-auto">
        <div className="w-[81%] mx-auto mt-10 flex justify-between">
          <div className="space-x-2 text-[var(--mainTextGrey)]">
            <Link to={"/home"}>Home</Link>
            <span className="space-x-4">/</span>
            <Link to={"/cart"}>About</Link>
          </div>
        </div>

      <div  className="flex flex-col-reverse xl:flex-row lg:flex-row md:flex-row mt-10">
          <AboutHeroLeft/>
          <AboutHeroRightImg/>
      </div>


      <div>
        <SaleBox />
      </div>

      <div>
        <TestemonilasCraousels/>
      </div>
      </div>
    );
  };

  export default AboutCont;
