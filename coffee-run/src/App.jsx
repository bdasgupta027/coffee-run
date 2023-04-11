import React from "react";
import { useState } from "react";
import { useRoutes, Link } from "react-router-dom";
import "./App.css";
import Home from "./router/Home";
import NewOrder from "./router/NewOrder";
import EditOrder from  "./router/EditOrder";
import DrinkDetails from "./router/DrinkDetails";

function App() {
  const route = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/neworder",
      element: <NewOrder />,
    },
    {
      path: "/editorder/:id",
      element: <EditOrder />,
    },
    {
      path: "/drinkdetails/:id",
      element: <DrinkDetails />,
    },
  ]);

  return (
    <div className="App">
      <div className="header" style={{}}>
        <h1 className="title">Coffee Run</h1>
        <Link to="/">
          <button className="button-56">Home</button>
        </Link>
        <Link to="/neworder">
          <button className="button-57">New Order</button>
        </Link>
        {route}
      </div>
    </div>
  );

}export default App;
