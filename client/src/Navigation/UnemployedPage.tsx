import React, { useContext } from 'react';
import { makeStyles } from '@mui/styles';
import Section from '../Components/Section';
import { EmployeesContext } from '../Data/EmployeesContext';
import { Typography } from '@mui/material';
import EmployeeListItem from '../Components/EmployeeListItem';
import { CompaniesContext } from '../Data/CompaniesContext';

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
  const companiesContext = useContext(CompaniesContext);
  const { employees } = employeesContext;
  const { companies } = companiesContext;

  return (
    <Section>
      <div className={classes.root}>
        <Typography variant='h5'>All unemployed people below</Typography>
        {companies.length ? (
          <Typography variant='body2' mb={2}>
            Choose a company in the dropdown to connect a person
          </Typography>
        ) : (
          <Typography variant='body2' mb={2}>
            There are no companies in the database
          </Typography>
        )}
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
