import "./App.scss";
import { RouterProvider } from "react-router-dom";
import { BaseRouter } from "./shared/routes/base";
import AOS from "aos";
function App() {
  return <RouterProvider router={BaseRouter}></RouterProvider>;
}

AOS.init();
export default App;
