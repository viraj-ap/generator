import React from "react";

function Prank() {
  return (
    <div className="mt-28">
      <div className="text-center">
        <div className="flex justify-center items-center mb-4">
          <img className="h-20 z-1" src="cat2.gif" alt="" />
        </div>
        <div className="text-4xl font-semibold text-white mb-4">
          Happy April Fools
        </div>
        <h2 className="text-2xl font-semibold text-white mb-4">
          Seriously? What did you think?
        </h2>
        <p className="text-lg text-gray-200 max-w-2xl mx-auto">
          We know you were expecting something else, but this is a prank! We
          hope you enjoyed the ride.
        </p>
        <div className="flex justify-center items-center mt-6">
          <img className="z-1" src="cat1.gif" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Prank;
