import { Route, Routes, Navigate } from "react-router-dom";
import { FormKitPage } from "../pages/FormKitPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<FormKitPage />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
