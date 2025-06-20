import { Route, Routes } from "react-router-dom";
import { FormKitPage } from "../pages/FormKitPage";

export const AppRouter = () => {
  return (
    <Routes>
      {/* <Route path="/formkit" element={<FormKitPage />} /> */}
      <Route path="/" element={<FormKitPage />} />
    </Routes>
  );
};
