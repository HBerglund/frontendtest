import React, { useContext } from 'react';
import { makeStyles } from '@mui/styles';
import Section from '../Components/Section';
import { EmployeesContext } from '../Data/EmployeesContext';
import { Typography } from '@mui/material';
import EmployeeListItem from '../Components/EmployeeListItem';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '600px',
  },
});

const UnemployedPage = () => {
  const classes = useStyles();
  const employeesContext = useContext(EmployeesContext);
  const { employees } = employeesContext;

  return (
    <Section>
      <div className={classes.root}>
        <Typography variant='h5'>All unemployed people below</Typography>
        <Typography variant='body2' mb={2}>
          Choose a company in the dropdown to connect a person
        </Typography>
        {employees.map((e, index) => {
          if (e.companyID === '') {
            return <EmployeeListItem employee={e} key={index} />;
          } else return null;
        })}
      </div>
    </Section>
  );
};

export default UnemployedPage;
