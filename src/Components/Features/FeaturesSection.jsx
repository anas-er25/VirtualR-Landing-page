import { features } from "../../constants";
import Feature from "./Feature";

const FeaturesSection = () => {
  return (
    <div
      className="relative mt-20 border-b border-neutral-800 min-h[800px]"
      id="features"
    >
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Features
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl lg:mt-20 mt-10 tracking-wide">
          Easily build
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            {" "}
            your code
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <Feature key={index} feature={feature} />
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
