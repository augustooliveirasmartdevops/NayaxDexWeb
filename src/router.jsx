import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/index.jsx";
import { DexUpload } from "./pages/Dex/UploadFIle/index.jsx";
import { PageNotFound } from "./pages/PageNotFound/index.jsx";
import Login from "./components/Authenticate/Login/index.jsx";
import ProtectedRouter from "./protectedRouter.jsx";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRouter />}>
        <Route path="/dexUpload" element={<DexUpload />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Router;
