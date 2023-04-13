import { createBrowserRouter } from "react-router-dom";
import Main from "./pages/Main";
import Albums from "./pages/Albums";
import Photos from "./pages/Photos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/albums/:id",
    element: <Albums />,
  },
  {
    // path: "/photos/:id",
    path: "/albums/photos/:id",
    element: <Photos />,
  },
  {
    path: "*",
    element: "Error",
  },
]);
export default router;
