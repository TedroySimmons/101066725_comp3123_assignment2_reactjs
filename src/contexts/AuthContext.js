import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuthData({ token });
    }
  }, []);

  const login = (token) => {
    localStorage.setItem('token', token);
    setAuthData({ token });
  };

  const logout = () => {
    localStorage.removeItem('token');
    setAuthData(null);
  };

  return (
    <AuthContext.Provider value={{ authData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
