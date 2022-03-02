import React, { useContext, useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { EmployeesContext } from '../Data/EmployeesContext';
import { CompaniesContext } from '../Data/CompaniesContext';

const useStyles = makeStyles({
  root: {
    margin: '1rem 0',
    padding: '1rem',
    background: '#66bb6a',
    opacity: '0.5',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
  },
});

const Message = () => {
  const employeesContext = useContext(EmployeesContext);
  const { message } = employeesContext;
  const companiesContext = useContext(CompaniesContext);

  const classes = useStyles();

  if (message.length) {
    return (
      <div className={classes.root}>
        <Typography>{message}</Typography>
      </div>
    );
  } else if (companiesContext.message.length) {
    return (
      <div className={classes.root}>
        <Typography>{companiesContext.message}</Typography>
      </div>
    );
  }
  return null;
};

export default Message;
