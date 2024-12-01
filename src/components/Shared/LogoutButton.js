import React, { useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';
import { Button } from '@mui/material';

const LogoutButton = () => {
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    window.location.href = '/login';
  };

  return <Button onClick={handleLogout}>Logout</Button>;
};

export default LogoutButton;
