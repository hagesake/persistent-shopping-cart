import { createBrowserRouter } from "react-router-dom";

import ROUTES from "./routes";

import App from "../App";
import HomeView from "../views/Home.view";
import ShoppingCartView from "../views/ShoppingCart.view";
import AboutView from "../views/About.view";

import NotFoundView from "../views/NotFound";

const router = createBrowserRouter([
  {
    path: ROUTES.home.path,
    Component: App,
    children: [
      {
        index: true,
        Component: HomeView,
      },
      {
        path: ROUTES.shoppingCart.path,
        Component: ShoppingCartView,
      },
      {
        path: ROUTES.about.path,
        Component: AboutView,
      },
    ],
    errorElement: NotFoundView(),
  },
]);

export default router;
