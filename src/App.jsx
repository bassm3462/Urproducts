import MainPage from "./component/Pages/MainPage.jsx";
import Root from "./component/Pages/Root.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AboutDetails from "./component/Pages/About/aboutDiteals.jsx";
import EventDetails from "./component/Pages/Event/EventDetails.jsx";
import ProjectType from "./component/Pages/Project/TypeProject/ProjectType.jsx";
import ProjectDetails from "./component/Pages/Project/TypeProject/project.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<MainPage />} />
      <Route path="/AboutDetails" element={<AboutDetails />} />
      <Route path="/EventDetails" element={<EventDetails />} />
      <Route path="/projecttype" element={<ProjectType />} />
      <Route path="/project" element={<ProjectDetails />} />
    </Route>
  )
);
function App() {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 2000);
  });

  return (
    <>
      {/* Loading */}
      {loading ? (
        <div className="dispalyLoding ">
          <div className="preloader"></div>
        </div>
      ) : (
        <RouterProvider router={router} />
      )}
    </>
  );
}

export default App;
