import { pricingOptions } from "../../constants";
import Princing from "./Princing";

const PricingSection = () => {
  return (
    <div className="mt-20" id="pricing">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider">
        Princig
      </h2>
      <div className="flex flex-wrap">
        {pricingOptions.map((option, index) => (
          <Princing key={index} option={option} />
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
