import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import useRouteElemenst from "./routes/useRouteElements";

function App() {
  const { routes } = useRouteElemenst();

  return<>{routes}</>;
}

export default App;
