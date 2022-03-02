import { createContext, FC, useEffect, useState } from 'react';

export type EmployeeType = {
  id?: string;
  name: string;
  companyID?: string;
};

interface EmployeeValue {
  employees: EmployeeType[];
  message: string;
  saveNewEmployee: (data: EmployeeType) => void;
  updateEmployee: (data: EmployeeType) => void;
}

export const EmployeesContext = createContext<EmployeeValue>({
  employees: [],
  message: '',
  saveNewEmployee: () => {},
  updateEmployee: () => {},
});

const EmployeesProvider: FC<{}> = ({ children }) => {
  const [employees, setEmployees] = useState([]);
  const [message, setMessage] = useState<string>('');

  const getAllEmployees = async () => {
    const response = await fetch('/employees');
    const result = await response.json();
    if (result.error) {
      setMessage(result.error.message);
    }
    console.log(result.collection);
    setEmployees(result.collection);
  };

  const saveNewEmployee = async (newEmployee: EmployeeType) => {
    const response = await fetch('/employees', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newEmployee),
    });
    const result = await response.json();
    if (result.error) {
      setMessage(result.error.message);
    }
    console.log(result.message);
    setMessage(result.message);
    getAllEmployees();
  };

  const updateEmployee = async (employee: EmployeeType) => {
    const response = await fetch(`/employees/${employee.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(employee),
    });
    const result = await response.json();
    if (result.error) {
      setMessage(result.error.message);
    }
    setMessage(result.message);
    getAllEmployees();
  };

  useEffect(() => {
    getAllEmployees();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setMessage('');
    }, 2000);
  }, [message]);

  return (
    <EmployeesContext.Provider
      value={{
        employees,
        message,
        saveNewEmployee,
        updateEmployee,
      }}
    >
      {children}
    </EmployeesContext.Provider>
  );
};

export default EmployeesProvider;
