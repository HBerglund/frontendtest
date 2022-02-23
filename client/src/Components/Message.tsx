import React, { useContext, useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { EmployeesContext } from '../Data/EmployeesContext';

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
  const [showMessage, setShowMessage] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  }, []);

  if (showMessage) {
    return (
      <div className={classes.root}>
        <Typography>{message}</Typography>
      </div>
    );
  }
  return null;
};

export default Message;
