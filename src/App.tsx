import "./App.scss";
import { RouterProvider } from "react-router-dom";
import { BaseRouter } from "./shared/routes/base";
function App() {
  return <RouterProvider router={BaseRouter}></RouterProvider>;
}

export default App;
