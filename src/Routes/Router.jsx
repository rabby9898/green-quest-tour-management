import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import Home from "../Pages/Home/Home";
import Booked from "../Pages/Booked/Booked";
import About from "../Pages/About/About";
import Travel from "../Pages/Travel/Travel";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import TourDetails from "../Components/TourDetails/TourDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/tourPlan.json"),
      },
      {
        path: "/booked",
        element: <Booked></Booked>,
        loader: () => fetch("/tourPlan.json"),
      },
      {
        path: "/tour-details/:id",
        element: <TourDetails></TourDetails>,
        loader: () => fetch("/tourPlan.json"),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/travel",
        element: <Travel></Travel>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);
export default router;
