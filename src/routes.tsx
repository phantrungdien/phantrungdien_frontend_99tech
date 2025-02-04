import { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Notfound } from "@component/Notfound";

import { routes } from "../src/config/route";

export default class AppRoutes extends Component<unknown, unknown> {
  render() {
    return (
      <BrowserRouter basename={"/"}>
        <Routes>
          {routes.map((item) => (
            <Route key={item.name} path={item.path} element={item.component} />
          ))}

          <Route path={"*"} element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
