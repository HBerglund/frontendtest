import React, { useContext, useState } from 'react';
import Section from '../Components/Section';
import { InputLabel, Typography, TextField, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Message from '../Components/Message';
import { CompaniesContext, CompanyType } from '../Data/CompaniesContext';
import CompanyAccordion from '../Components/CompanyAccordion';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '600px',
  },
  title: {
    marginBottom: '1rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
});

const CompaniesPage = () => {
  const classes = useStyles();
  const companiesContext = useContext(CompaniesContext);
  const { saveNewCompany, companies } = companiesContext;

  const [newCompany, setNewCompany] = useState<CompanyType>({ name: '' });

  const handleSubmitForm = () => {
    saveNewCompany(newCompany);
    setNewCompany({ name: '' });
  };

  return (
    <Section>
      <div className={classes.root}>
        <div className={classes.title}>
          <Typography variant='h5'>
            Save a new company to the database
          </Typography>
        </div>
        <div className={classes.form}>
          <InputLabel style={{ marginBottom: '5px' }} id='CompanyName'>
            Company name
          </InputLabel>
          <TextField
            name='companyName'
            id='companyName'
            onChange={(e) => setNewCompany({ name: e.target.value })}
            value={newCompany.name}
          />
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
      {companies.map((c, index) => (
        <CompanyAccordion key={index} company={c} />
      ))}
    </Section>
  );
};

export default CompaniesPage;
