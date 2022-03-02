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
import { EmployeesContext, EmployeeType } from '../Data/EmployeesContext';
import Message from '../Components/Message';
import { CompaniesContext } from '../Data/CompaniesContext';

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

const EmployeesPage = () => {
  const classes = useStyles();
  const employeesContext = useContext(EmployeesContext);
  const { saveNewEmployee } = employeesContext;
  const companiesContext = useContext(CompaniesContext);
  const { companies } = companiesContext;

  const [newEmployee, setNewEmployee] = useState<EmployeeType>({
    name: '',
    companyID: '',
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
      companyID: '',
    });
  };

  return (
    <Section>
      <div className={classes.root}>
        <div className={classes.title}>
          <Typography variant='h5'>
            Save a new person to the database
          </Typography>
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
          {companies.length !== 0 && (
            <>
              <InputLabel style={{ marginBottom: '5px' }} id='companies'>
                Companies
              </InputLabel>
              <Select
                labelId='companies'
                name='companyID'
                onChange={handleFormChange}
                value={newEmployee.companyID}
                disabled={companies.length ? false : true}
              >
                {companies.map(({ name, id }) => (
                  <MenuItem key={id} value={id}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </>
          )}
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

export default EmployeesPage;
