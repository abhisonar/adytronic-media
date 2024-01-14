import HomePage from "../../app/home/page.page";
import LayoutComponent from "../../layout/layout.component";
import { RouteObject, createBrowserRouter } from "react-router-dom";

const routes = [
  {
    element: <LayoutComponent />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
] as RouteObject[];

export const BaseRouter = createBrowserRouter(routes);
