import React, { useState } from 'react';
import Section from '../Components/Section';
import {
  FormGroup,
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
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');

  const handleCompanySelect = (e: SelectChangeEvent<string>) => {
    const { value } = e.target;
    setCompany(value);
  };

  const handleSubmitForm = () => {
    console.log('name: ', name);
    console.log('company: ', company);
    setName('');
    setCompany('');
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
          <TextField onChange={(e) => setName(e.target.value)} value={name} />
          <InputLabel style={{ marginBottom: '5px' }} id='companies'>
            Companies
          </InputLabel>
          <Select
            labelId='companies'
            name='company'
            onChange={handleCompanySelect}
            value={company}
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
      </div>
    </Section>
  );
};

export default Employee;
