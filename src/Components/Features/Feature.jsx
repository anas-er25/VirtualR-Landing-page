import React from 'react'

const Feature = ({ feature }) => {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/3">
      <div className="flex">
        <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
          {feature.icon}
        </div>
        <div>
          <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
          <p className="text-md p-2 mb-20 text-neutral-500">{feature.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Feature
