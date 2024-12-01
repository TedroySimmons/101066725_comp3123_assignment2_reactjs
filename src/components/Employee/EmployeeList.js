import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableHead, TableBody, TableRow, TableCell, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [search] = useState('');
  
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/employees');
        setEmployees(response.data);
      } catch (error) {
        console.error(error);
        alert('Error fetching employees');
      }
    };
    fetchEmployees();
  }, [search]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/employees/${id}`);
      setEmployees(employees.filter((employee) => employee._id !== id));
    } catch (error) {
      console.error(error);
      alert('Failed to delete employee');
    }
  };

  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Position</TableCell>
            <TableCell>Department</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((employee) => (
            <TableRow key={employee._id}>
              <TableCell>{employee.name}</TableCell>
              <TableCell>{employee.position}</TableCell>
              <TableCell>{employee.department}</TableCell>
              <TableCell>
                <Link to={`/employees/${employee._id}`}>View</Link>
                <Link to={`/employees/edit/${employee._id}`}>Edit</Link>
                <Button onClick={() => handleDelete(employee._id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link to="/employees/add">Add New Employee</Link>
    </div>
  );
};

export default EmployeeList;
