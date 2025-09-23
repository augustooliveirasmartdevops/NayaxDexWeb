import { Route, Routes } from "react-router-dom";
import { PageNotFound } from "./pages/PageNotFound";
import ProtectedRouter from "./protectedRouter";
// import { LoginPage } from "./pages/Login";
import { Home } from "./pages/Home/Home";
import { DexUpload } from "./pages/Dex/UploadFIle";

const Router = () => {
  return (
    <Routes>
      {/* <Route path="/login" element={<LoginPage />} /> */}
      <Route path="/">
        <Route index element={<Home />} />
      </Route>
      <Route element={<ProtectedRouter />}>
        <Route path="dexUpload">
          <Route index element={<DexUpload />} />
        </Route>
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Router;
