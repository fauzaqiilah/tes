import React, { Suspense, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import LoadingComponent from "../component/loadingcomp/LoadingComponent";
import FormAspirasi from '../pages/form-page/FormAspirasi';
import Aspirasi from '../pages/aspirasi-page/Aspirasi';
import Petunjuk from '../pages/petunjuk-page/Petunjuk';
import LandingPage from '../pages/landing-page/LandingPage';
import LayoutComponent from "../component/navbar/LayoutComponent";



const RouteManagement = () => {
  // const token = localStorage.getItem("token");
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!token) {
  //     navigate("/");
  //   }
  // }, [token]);

  return (
       <>
       <Routes>
          <Route path="/" element={<LandingPage/>} />
        </Routes>
        <LayoutComponent>
          <Routes>
            <Route path="/form" element={<FormAspirasi/>} />
            <Route path="/aspirasi" element={<Aspirasi/>} />
            <Route path="/petunjuk" element={<Petunjuk/>} />
          </Routes>
        </LayoutComponent>
        </>
  );
};

export default RouteManagement;