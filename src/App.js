import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import EmployeeList from './components/Employee/EmployeeList';
import AddEmployee from './components/Employee/AddEmployee';
import EmployeeDetails from './components/Employee/EmployeeDetails';
import UpdateEmployee from './components/Employee/UpdateEmployee';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/employees" element={<EmployeeList />} />
        <Route path="/employees/add" element={<AddEmployee />} />
        <Route path="/employees/:id" element={<EmployeeDetails />} />
        <Route path="/employees/edit/:id" element={<UpdateEmployee />} />
      </Routes>
    </Router>
  );
}

export default App;
