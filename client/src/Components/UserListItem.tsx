import React, { useContext, useState } from 'react';
import { makeStyles } from '@mui/styles';
import { EmployeesContext, EmployeeType } from '../Data/EmployeesContext';
import {
  Select,
  Typography,
  MenuItem,
  SelectChangeEvent,
  Button,
} from '@mui/material';
import { CompaniesContext } from '../Data/CompaniesContext';

interface UserListItemProps {
  employee: EmployeeType;
}

const useStyles = makeStyles({
  root: {
    margin: '0.5rem 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
  },
});

const UserListItem = ({ employee }: UserListItemProps) => {
  const classes = useStyles();
  const [employeeToUpdate, setEmployeeToUpdate] = useState<EmployeeType>({
    name: employee.name,
    id: employee.id,
    companyID: '',
  });
  const companiesContext = useContext(CompaniesContext);
  const employeesContext = useContext(EmployeesContext);
  const { updateEmployee } = employeesContext;
  const { companies } = companiesContext;
  const [edited, setEdited] = useState(false);

  const handleEmployeeChange = (e: SelectChangeEvent<string>) => {
    const { value } = e.target;
    setEmployeeToUpdate({ ...employeeToUpdate, companyID: value });
    setEdited(true);
  };

  const handleSaveClick = () => {
    setEdited(false);
    console.log(employeeToUpdate);
    updateEmployee(employeeToUpdate);
  };
  return (
    <div className={classes.root}>
      <Typography>{employee.name}</Typography>
      <Select
        labelId='companies'
        name='companyID'
        value={employeeToUpdate.companyID}
        onChange={handleEmployeeChange}
        style={{ width: '100%', marginBottom: '1rem' }}
      >
        {companies.map(({ name, id }) => (
          <MenuItem key={id} value={id}>
            {name}
          </MenuItem>
        ))}
      </Select>
      {edited && (
        <Button variant='contained' onClick={handleSaveClick}>
          Save changes
        </Button>
      )}
    </div>
  );
};

export default UserListItem;
