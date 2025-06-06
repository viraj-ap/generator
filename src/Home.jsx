import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/what-did-you-think");
  };
  return (
    <div className="flex flex-col items-center">
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 pt-32 pb-8">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-semibold text-white mb-4 ">
            Ghibli Generator
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Tired of ChatGPT and other AI tools?
            <br /> Try our Ghibli Generator! It actually works.
          </p>
        </div>
        
        {/* Desktop view - all three images */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="img2.webp"
              alt="Generated landscape"
              className="w-full h-64 object-cover mt-12 rounded-t-xl"
            />
            <div className="bg-white bg-opacity-10 p-4">
              <h3 className="text-white font-medium">Landscape</h3>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="img1.webp"
              alt="Generated portrait"
              className="w-full h-64 object-cover"
            />
            <div className="bg-white bg-opacity-10 p-4">
              <h3 className="text-white font-medium">Portrait</h3>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="img3.webp"
              alt="Generated abstract art"
              className="w-full h-64 object-cover mt-12 rounded-t-xl"
            />
            <div className="bg-white bg-opacity-10 p-4">
              <h3 className="text-white font-medium">Abstract</h3>
            </div>
          </div>
        </div>
        
        {/* Mobile view - only img1 */}
        <div className="md:hidden flex justify-center mb-12">
          <div className="rounded-lg overflow-hidden shadow-lg max-w-xs">
            <img
              src="img1.webp"
              alt="Generated portrait"
              className="w-full h-64 object-cover"
            />
            <div className="bg-white bg-opacity-10 p-4">
              <h3 className="text-white font-medium">Portrait</h3>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={handleClick}
            className="bg-white cursor-pointer hover:bg-gray-100 text-blue-800 font-bold py-4 px-8 rounded-xl text-lg shadow-lg transform transition hover:scale-105"
          >
            Generate Now
          </button>
        </div>
      </main>
    </div>
  );
};

export default Home;