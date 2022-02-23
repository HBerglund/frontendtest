import React from 'react';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import Section from './Section';

const useStyles = makeStyles({
  root: {
    padding: '20px',
    background: '#2D3142',
  },
  text: {
    color: 'white',
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography component='h1' variant='h3' className={classes.text}>
        Company admin interface
      </Typography>
    </div>
  );
};

export default Header;
