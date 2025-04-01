import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Prank from "./Prank";
import Navbar from "./Navbar";
import "./App.css";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/what-did-you-think", element: <Prank /> },
]);

function App() {
  return (
    <>
      <div className="mb-12">
        <Navbar />
      </div>
      <div>
        <RouterProvider router={router} />;
      </div>

    </>
  );
}

export default App;
