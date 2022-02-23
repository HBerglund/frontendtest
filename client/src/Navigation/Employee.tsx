import React, { ChangeEvent, useContext, useState } from 'react';
import Section from '../Components/Section';
import {
  TextField,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  Typography,
  Button,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { companies } from '../arbData';
import { EmployeesContext, EmployeeType } from '../Data/EmployeesContext';
import Message from '../Components/Message';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    marginBottom: '1rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
});

const Employee = () => {
  const classes = useStyles();
  const employeesContext = useContext(EmployeesContext);
  const { saveNewEmployee } = employeesContext;

  const [newEmployee, setNewEmployee] = useState<EmployeeType>({
    name: '',
    company: '',
  });

  const handleFormChange = (
    e: SelectChangeEvent<string> | ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = e.target;
    setNewEmployee({
      ...newEmployee,
      [e.target.name]: value,
    });
  };

  const handleSubmitForm = () => {
    saveNewEmployee(newEmployee);
    setNewEmployee({
      name: '',
      company: '',
    });
  };

  return (
    <Section>
      <div className={classes.root}>
        <div className={classes.title}>
          <Typography>Save a new person to the database</Typography>
        </div>
        <div className={classes.form}>
          <InputLabel style={{ marginBottom: '5px' }} id='name'>
            Name
          </InputLabel>
          <TextField
            name='name'
            id='name'
            onChange={(e: any) => handleFormChange(e)}
            value={newEmployee.name}
          />
          <InputLabel style={{ marginBottom: '5px' }} id='companies'>
            Companies
          </InputLabel>
          <Select
            labelId='companies'
            name='company'
            onChange={handleFormChange}
            value={newEmployee.company}
          >
            {companies.map((c, i) => (
              <MenuItem key={i} value={c}>
                {c}
              </MenuItem>
            ))}
          </Select>
          <Button
            variant='contained'
            type='submit'
            style={{ marginTop: '1rem' }}
            onClick={handleSubmitForm}
          >
            Save
          </Button>
        </div>
        <Message />
      </div>
    </Section>
  );
};

export default Employee;
