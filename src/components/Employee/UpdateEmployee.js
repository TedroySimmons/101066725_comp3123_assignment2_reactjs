import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateEmployee = () => {
  const [employee, setEmployee] = useState({
    name: '',
    position: '',
    department: '',
    salary: '',
  });
  
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(`/api/employees/${id}`);
        setEmployee(response.data);
      } catch (error) {
        console.error(error);
        alert('Error fetching employee data');
      }
    };
    fetchEmployee();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/employees/${id}`, employee);
      navigate('/employees');
    } catch (error) {
      console.error(error);
      alert('Error updating employee');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>Update Employee</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          value={employee.name}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Position"
          name="position"
          value={employee.position}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Department"
          name="department"
          value={employee.department}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Salary"
          name="salary"
          type="number"
          value={employee.salary}
          onChange={handleChange}
          fullWidth
        />
        <Button type="submit" variant="contained">
          Update Employee
        </Button>
      </form>
    </div>
  );
};

export default UpdateEmployee;
