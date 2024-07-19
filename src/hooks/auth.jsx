import { createContext, useContext, useEffect, useState } from "react";

import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signin({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;

      localStorage.setItem("@rocketMovies:user", JSON.stringify(user));
      localStorage.setItem("@rocketMovies:token", token);

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setData({ user, token });
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Nao foi possivel entrar");
      }
    }
  }

  function signinOut() {
    localStorage.removeItem("@rocketMovies:token");
    localStorage.removeItem("@rocketMovies:user");

    setData({});
  }

  async function updateProfile({ user, avatarFilfe }) {
    try {
      if (avatarFilfe) {
        const fileFormUpload = new FormData();
        fileFormUpload.append("avatar", avatarFilfe);

        const response = await api.patch("/users/avatar", fileFormUpload);
        user.avatar = response.data.avatar;
      }

      await api.put("/users", user);
      localStorage.setItem("@rocketMovies:user", JSON.stringify(user));

      setData({ user, token: data.token });
      alert("perfil Atualizado");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Nao foi possivel atualizar o perfil");
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("@rocketMovies:token");
    const user = localStorage.getItem("@rocketMovies:user");

    if (token && user) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setData({
        token,
        user: JSON.parse(user),
      });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signin,
        updateProfile,
        user: data.user,
        signinOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
