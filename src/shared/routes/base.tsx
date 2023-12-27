import HomePage from "../../app/home/home.page";
import LayoutComponent from "../../layout/layout.component";
import { RouteObject, createBrowserRouter } from "react-router-dom";

const routes = [
  {
    path: "/",
    element: <LayoutComponent />,
    children: [
      {
        path: "/home",
        element: <HomePage />,
      },
    ],
  },
] as RouteObject[];

export const BaseRouter = createBrowserRouter(routes);
