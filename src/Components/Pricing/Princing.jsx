import { CheckCircle } from "lucide-react";

const Princing = ({ option }) => {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
      <div className="p-10 border border-neutral-700 rounded-xl">
        <h3 className="text-4xl mb-8 text-center">
          {option.title}
          {option.title === "Pro" && (
            <span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl mb-4 ml-2">
              {" "}
              (Most Popular)
            </span>
          )}
        </h3>
        <p className="mb-8">
          <span className="text-5xl mt-6 mr-2">{option.price}</span>
          <span className="text-neutral-400 tracking-tight">/Month</span>
        </p>
        <ul>
          {option.features.map((feature, index) => (
            <li key={index} className="flex items-center mt-8">
              <CheckCircle />
              <span className="ml-2">{feature}</span>
            </li>
          ))}
        </ul>
        <a
          href=""
          className="inline-flex justify-center items-center w-full p-5 h-12 text-xl mt-20 tracking-tight bg-gradient-to-r from-orange-500 to-red-400 text-white text-center rounded-lg hover:bg-gradient-to-r hover:from-orange-600 hover:to-red-500 transition-all duration-300"
        >
          Subscribe
        </a>
      </div>
    </div>
  );
};

export default Princing
