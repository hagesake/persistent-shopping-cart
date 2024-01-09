import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import router from "./router/router";

import { Provider } from "react-redux";
import cartStore from "./redux_stores/shopping_cart/store.ts";

import { PersistGate } from "redux-persist/integration/react";
import { cartPersistor } from "./redux_stores/shopping_cart/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={cartStore}>
      <PersistGate loading={null} persistor={cartPersistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
