import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => {
    // İlk yükləmədə tokeni yoxlayırıq
    return localStorage.getItem("token") || null;
  });

  const auth = (userToken) => {
    console.log("Auth funksiyası çağırıldı token ilə:", userToken);
    setToken(userToken);
    localStorage.setItem("token", userToken); // Tokeni saxlayırıq
  };

  const isAuthenticated = !!token;

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, auth, token }}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
