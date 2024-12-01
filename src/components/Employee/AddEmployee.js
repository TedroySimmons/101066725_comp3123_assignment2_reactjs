import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [department, setDepartment] = useState('');
  const [salary, setSalary] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/employees', { name, position, department, salary });
      navigate('/employees');
    } catch (error) {
      console.error(error);
      alert('Failed to add employee');
    }
  };

  return (
    <div>
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
        <TextField label="Position" value={position} onChange={(e) => setPosition(e.target.value)} fullWidth />
        <TextField label="Department" value={department} onChange={(e) => setDepartment(e.target.value)} fullWidth />
        <TextField label="Salary" type="number" value={salary} onChange={(e) => setSalary(e.target.value)} fullWidth />
        <Button type="submit" variant="contained">Add Employee</Button>
      </form>
    </div>
  );
};

export default AddEmployee;
