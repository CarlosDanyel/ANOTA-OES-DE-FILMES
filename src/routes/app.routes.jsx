import { Route, Routes } from "react-router-dom";

import { Filme } from "../pages/Filme";
import { Home } from "../pages/Home";
import { New } from "../pages/New";
import { Profile } from "../pages/Profile";
import { Signin } from "../pages/Signin";
import { SigninUp } from "../pages/SigninUp";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/new" element={<New />} />
      <Route path="/signinUp" element={<SigninUp />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/filme/:id" element={<Filme />} />
    </Routes>
  );
};
