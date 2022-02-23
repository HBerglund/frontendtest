import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <BottomNavigation showLabels>
      <BottomNavigationAction
        component={Link}
        value='Employees'
        label='Employees'
        to='/'
      />
      <BottomNavigationAction
        component={Link}
        value='Companies'
        label='Companies'
        to='/companies'
      />
      <BottomNavigationAction
        component={Link}
        value='Unemployed'
        label='Unemployed'
        to='/unemployed'
      />
    </BottomNavigation>
  );
};

export default Navbar;
