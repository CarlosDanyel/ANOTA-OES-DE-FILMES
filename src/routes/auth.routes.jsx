import { Route, Routes } from "react-router-dom";

import { Signin } from "../pages/Signin";
import { SigninUp } from "../pages/SigninUp";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/signinup" element={<SigninUp />} />
    </Routes>
  );
};
