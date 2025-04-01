import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Prank from "./Prank";
import Navbar from "./Navbar";
import "./App.css";
import Clarity from "@microsoft/clarity";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/what-did-you-think", element: <Prank /> },
]);

function App() {
  const projectId = "qx8ce6tk5m";

  Clarity.init(projectId);
  return (
    <>
      <div className="">
        <Navbar />
      </div>
      <div>
        <RouterProvider router={router} />;
      </div>
    </>
  );
}

export default App;
