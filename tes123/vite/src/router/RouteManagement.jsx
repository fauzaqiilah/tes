import React, { Suspense, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import LoadingComponent from "../component/loadingcomp/LoadingComponent";
import LoginPage from "../pages/login-page/LoginPage";
import FormAspirasi from '../pages/form-page/FormAspirasi';
import Aspirasi from '../pages/aspirasi-page/Aspirasi';
import Petunjuk from '../pages/petunjuk-page/Petunjuk';



const RouteManagement = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token]);

  return (
    <Suspense fallback={<LoadingComponent />}>
      {!token ? (
        <Routes>
          <Route path="/" element={<LoginPage/>} />
        </Routes>
      ) : (
        <LayoutComponent>
          <Routes>
            <Route path="/form" element={<FormAspirasi/>} />
            <Route path="/aspirasi" element={<Aspirasi/>} />
            <Route path="/petunjuk" element={<Petunjuk/>} />
          </Routes>
        </LayoutComponent>
      )}
    </Suspense>
  );
};

export default RouteManagement;