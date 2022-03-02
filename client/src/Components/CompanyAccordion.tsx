import React, { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import { CompanyType } from '../Data/CompaniesContext';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Divider,
  IconButton,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import { EmployeesContext, EmployeeType } from '../Data/EmployeesContext';

interface CompanyAccordionProps {
  company: CompanyType;
}

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    margin: '2rem 0',
  },
  accordionDetails: {
    display: 'flex',
    flexDirection: 'column',
  },
});

const CompanyAccordion = ({ company }: CompanyAccordionProps) => {
  const classes = useStyles();
  const employeesContext = useContext(EmployeesContext);
  const { employees, updateEmployee } = employeesContext;
  const [employeesArr, setEmployeesArr] = useState<EmployeeType[]>([]);

  const saveEmployeesArr = () => {
    for (let i = 0; i < employees.length; i++) {
      if (employees[i].companyID === company.id) {
        setEmployeesArr([...employeesArr, employees[i]]);
      }
    }
  };

  const handleRemovePerson = (employee: EmployeeType) => {
    updateEmployee({ ...employee, companyID: '' });
  };

  useEffect(() => {
    saveEmployeesArr();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [employees, company]);

  return (
    <Accordion className={classes.root}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls='panel1a-content'
        id='panel1a-header'
      >
        <Typography mr={2} variant='subtitle1'>
          {company.name}
        </Typography>
      </AccordionSummary>
      <AccordionDetails className={classes.accordionDetails}>
        {!employeesArr.length && (
          <Typography mr={2}>This company has no employees</Typography>
        )}
        {employees
          .filter((employee) => employee.companyID === company.id)
          .map((employee, index) => {
            return (
              <div key={employee.id}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Typography mr={2} key={index}>
                    {employee.name}
                  </Typography>
                  {employee.id && (
                    <IconButton onClick={() => handleRemovePerson(employee)}>
                      <PersonRemoveIcon />
                    </IconButton>
                  )}
                </div>
                <Divider style={{ marginBottom: '1rem' }} />
              </div>
            );
          })}
      </AccordionDetails>
    </Accordion>
  );
};

export default CompanyAccordion;
