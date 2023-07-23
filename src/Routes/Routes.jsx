import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AllJobs from "../Pages/AllJobs/AllJobs";
import CompanyDetails from "../Pages/CompanyDetails/CompanyDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/alljobs",
        element: <AllJobs></AllJobs>,
      },
      {
        path: "/allcompanies/:id",
        element: <CompanyDetails></CompanyDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:2000/allcompanies/${params.id}`),
      },
    ],
  },
]);
export default router;
