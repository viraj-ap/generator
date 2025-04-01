import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/what-did-you-thought");
  };
  return (
    <div className="flex flex-col items-center">
      {/* Main Content - positioned to appear below navbar */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 pt-32 pb-8">
        {" "}
        {/* Added pt-32 to create space for navbar */}
        {/* Text Above Images */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Ghibli Generator
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Tired of ChatGPT and other AI tools? Try our Ghibli Generator! It actually works.
          </p>
        </div>
        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Image 1 */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="img2.webp"
              alt="Generated landscape"
              className="w-full h-64 object-cover"
            />
            <div className="bg-white bg-opacity-10 p-4">
              <h3 className="text-white font-medium">Landscape</h3>
            </div>
          </div>

          {/* Image 2 */}
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

          {/* Image 3 */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="img3.webp"
              alt="Generated abstract art"
              className="w-full h-64 object-cover"
            />
            <div className="bg-white bg-opacity-10 p-4">
              <h3 className="text-white font-medium">Abstract</h3>
            </div>
          </div>
        </div>
        {/* Generate Button */}
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
