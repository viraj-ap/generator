import React from "react";

function Prank() {
  return (
    <div className="mt-36 px-4 sm:px-8 md:px-8">
      <div className="text-center">
        <div className="flex justify-center items-center mb-4">
          <img className="h-16 sm:h-20 z-10" src="cat2.gif" alt="" />
        </div>
        <div className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-4">
          Happy April Fools
        </div>
        <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
          Seriously? What did you think?
        </h2>
        <p className="text-base sm:text-lg text-gray-200 max-w-2xl mx-auto">
          We know you were expecting something else, but this is a prank! We
          hope you enjoyed the ride.
        </p>
        <div className="flex justify-center items-center mt-6">
          <img className="max-w-full sm:max-w-md md:max-w-lg z-10" src="cat1.gif" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Prank;