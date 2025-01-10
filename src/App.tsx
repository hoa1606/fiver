import { useEffect } from "react";
import "./App.css";
import useRouteElemenst from "./routes/useRouteElements";
import { adminApi } from "./apis/admin.api";

function App() {
  const { routes } = useRouteElemenst();

  return<>{routes}</>;
}

export default App;
